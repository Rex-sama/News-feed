import { useState, useEffect } from 'react'

const PostColumn = ({ posts, modalSubmit }) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        setPost([...posts])
    }, [posts])

    const closePost = (index) => {
        const item = post.splice(index, 1);
        setPost(post.filter(data => data.id !== item[0]?.id))
    };

    return (

        <div className="posts-column">
            {post?.map((post, index) => {
                return (
                    <div className="post-column-item" key={post.id}>
                        <button onClick={() => closePost(index)}>X</button>
                        <div className="list-group-item-column">
                            <p onClick={modalSubmit} id={post.id} > {post.title}</p>
                            <p>{post.published}</p>
                            <img src="http://www.cockeringles.org/wp-content/uploads/2020/11/img_3776.jpg" alt="newsicon" width="100" height="90" />
                        </div>
                    </div>
                );
            })}
        </div>

    )
}

export default PostColumn

import { React, useEffect, useState } from "react";
import "./CSS/Posts.css";
import newsfeed from "../asset/newsfeed.png"

const PostsRow = ({ posts, modalSubmit }) => {

  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost([...posts])
  }, [posts])

  const closePost = (index) => {
    const item = post.splice(index, 1);
    setPost(post.filter(data => data.id !== item[0]?.id))
  };

  return (
    <div className="posts-row">
      {post?.map((post, index) => {
        return (
          <div className="post-row-item" key={post.id}>
            <div className="list-group-item-row">
              <img src={newsfeed} alt="news" width="50" height="50" />
              <div className="row-title" >
                <p onClick={modalSubmit} id={post.id} >{post.title}</p>
                <p>{post.published}</p>
              </div>

            </div>
            <button onClick={() => closePost(index)} >x</button>
          </div>
        );
      })}
    </div>
  );
};

export default PostsRow;

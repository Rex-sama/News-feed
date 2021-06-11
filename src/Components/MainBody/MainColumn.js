import { useEffect, useState } from "react";
import PostColumn from "./PostColumn";
import Pagination from "./Pagination";
import Modal from "./Modal/Modal";
import "./CSS/MainBody.css";

const MainColumn = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [state, setState] = useState(false);
  const [postid, setPostid] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("https://api.first.org/data/v1/news");
      const result = await res.json();
      setPosts(result.data);
    };
    fetchPost();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const modalSubmit = (e) => {
    e.preventDefault();
    setPostid(e.target.id);
    setState(true);
  };
  const handleClose = () => {
    setState(false);
  };

  return (
    <div className="main-column">
      <PostColumn posts={currentPosts} modalSubmit={modalSubmit} />
      <div style={{ marginTop: "80px", marginLeft: "100px" }}>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>


      <Modal postid={postid} show={state} handleClose={handleClose} />
    </div>
  );
};

export default MainColumn;

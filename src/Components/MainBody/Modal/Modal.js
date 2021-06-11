import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ handleClose, postid, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [post, setPost] = useState({})
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("https://api.first.org/data/v1/news");
      const result = await res.json();
      const check = await result.data.find(data => data.id === Number(postid))
      setPost(check);
    };
    fetchPost();
  }, [postid]);
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>{post?.title}</h1>
        <p>{post?.published}</p>
        <p>{post?.summary}</p>
        <p>{post?.link}</p>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;

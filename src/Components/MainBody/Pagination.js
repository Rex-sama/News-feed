import React from "react";
import "./CSS/Pagination.css"
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav >
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-items">
            <div onClick={() => paginate(number)} className="page-links">
              {number}
            </div>
          </li>
        )).slice(0, 5)}
      </ul>
    </nav>
  );
};

export default Pagination;

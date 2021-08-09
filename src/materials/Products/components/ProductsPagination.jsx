import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./ProductsPagination.scss";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link
} from "react-router-dom";

const ProductsPagination = ( {itemsPerPage, totalItems, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <Pagination aria-label="Page navigation example">
    //   <PaginationItem>
    //     {pageNumbers.map(number => (
    //       <PaginationLink className="page-i" href="#" onClick={() => paginate(number)}>
    //         {number}
    //       </PaginationLink>
    //     ))}
    //   </PaginationItem>
    // </Pagination>
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number =>(
          <li key={number} className="page-item">
            <Link to="!#" onClick={() => paginate(number)} href="!#" className="page-link">{number}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductsPagination;

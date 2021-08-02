import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./ProductsPagination.scss";

const Example = (props) => {
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink
          aria-hidden="false"
          aria-label="Перша"
          className="page-i"
          first
          href="#"
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          aria-label="Попередня"
          className="page-i"
          previous
          href="#"
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="page-i page-num" href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="page-i page-num" href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="page-i page-num" href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="page-i page-num" href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="page-i page-num" href="#">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          aria-label="Наступна"
          className="page-i"
          next
          href="#"
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink aria-label="Остання" className="page-i" last href="#" />
      </PaginationItem>
    </Pagination>
  );
};

export default Example;

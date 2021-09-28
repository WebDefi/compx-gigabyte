import React, {useEffect, useState} from "react";
import {Container, Pagination, PaginationItem, PaginationLink} from "reactstrap";
import "./ProductsPagination.scss";
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    Link
} from "react-router-dom";

const ProductsPagination = ({itemsPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Container>
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink key={'prev'} className="page-i page-num" onClick={() => paginate(currentPage - 1)}>
                        ←
                    </PaginationLink>
                    {pageNumbers.map(number => (
                        <PaginationLink key={number}
                                        className={`page-i page-num ${currentPage === number ? 'page-active' : ''}`}
                                        onClick={() => paginate(number)}>
                            {number}
                        </PaginationLink>
                    ))}
                    <PaginationLink key={'next'} className="page-i page-num" onClick={() => paginate(currentPage + 1)}>
                        →
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        </Container>
    );
};

export default ProductsPagination;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductItem from "./components/ProductItem";
import ProductsPagination from "./components/ProductsPagination.jsx";

const Products = () => {
  return (
    <Container fluid>
      <ProductItem></ProductItem>
      <ProductsPagination />
    </Container>
  );
};

export default Products;

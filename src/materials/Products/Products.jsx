import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductItem from "./components/ProductItem";
import ProductsPagination from "./components/ProductsPagination.jsx";
import ProductsFilter from "./components/ProductsFilter";
import ProductsFilterBtn from "./components/ProductsFilterBtn";
import logoSrc from "../../static/images/filter.svg";
import axios from "axios";
import {

  Link
} from "react-router-dom";

const Products = ({ items }) => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await axios.get('http://3.249.81.155:3000/gigabyte/api/v1/items/1')
  //     setItems(res.data);
  //   }
  //   fetchProducts();
  // }, []);
  // if (error) {
  //   return <div>Ошибка: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Загрузка...</div>;
  // } else {

  // const [currentPage, setCurrentPage] = useState(1);
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <Row style={{ padding: "0 40px" }}>
      <Col sm="12" lg="3" xl="3">
        <ProductsFilter
          FilterBtn="Фільтр"
          CleanBtn="Очистити"
          logoSrc={logoSrc}
        ></ProductsFilter>
        <ProductsFilterBtn textBtn="Фільтр" />
      </Col>
      <Col sm="" lg="9" xl="9">
        <Row className="products_row" style={{ paddingRight: "60px" }}>
          {items.map((item) => (
            <Col sm="6" lg="4" xl="4" style={{ marginBottom: "30px" }}>
              <Link to={`/products/${item.id}`}>
              <ProductItem
                key={item.id}
                title={item.name}
                price={item.price}
                link={item.url}
              ></ProductItem>
              </Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Products;

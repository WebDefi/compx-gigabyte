import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductItem from "./components/ProductItem";
import ProductsPagination from "./components/ProductsPagination.jsx";
import ProductsFilter from "./components/ProductsFilter";
import logoSrc from "../../static/images/filter.svg";
import axios from "axios";

const Products = ({items}) => {
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
    
          <Row>
            <Col md="3">
              <ProductsFilter
                FilterBtn="Фільтр"
                CleanBtn="Очистити"
                logoSrc={logoSrc}
              ></ProductsFilter>
            </Col>
            <Col md={{size: "9", offset: "3"}}>
              {items.map((item) => (
                <ProductItem
                  key={item.id}
                  title={item.name}
                  price={item.price}
                ></ProductItem>
              ))}
            </Col>
          </Row>

    );
  };

export default Products;

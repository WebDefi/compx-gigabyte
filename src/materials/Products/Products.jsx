import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductItem from "./components/ProductItem";
import ProductsPagination from "./components/ProductsPagination.jsx";
import ProductsFilter from "./components/ProductsFilter";
import logoSrc from "../../static/images/filter.svg";
import SliderAorus from "../SliderAorus/SliderAorus";
import "./Products.scss";

const Products = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://3.249.81.155:3000/gigabyte/api/v1/items/1?start=0&end=10")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="products__wait">Завантаження...</div>;
  } else {
    return (
      <section class="product-cards">
        <Container fluid style={{ padding: "100px 0px 0" }}>
          <SliderAorus />
          <Row>
            <Col sm="" md="3" xl="3">
              <ProductsFilter
                FilterBtn="Фільтр"
                CleanBtn="Очистити"
                logoSrc={logoSrc}
              ></ProductsFilter>
            </Col>
            <Col md="9" xl="9">
              <Row className="products_row" style={{ paddingRight: "80px" }}>
                {items.map((item) => (
                  <Col md="4" xl="4" style={{ marginBottom: "40px" }}>
                    <ProductItem
                      key={item.id}
                      title={item.name}
                      price={item.price}
                    ></ProductItem>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <ProductsPagination />
        </Container>
      </section>
    );
  }
};

export default Products;

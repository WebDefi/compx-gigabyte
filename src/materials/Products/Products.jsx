import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductItem from "./components/ProductItem";
import ProductsPagination from "./components/ProductsPagination.jsx";
import ProductsFilter from "./components/ProductsFilter";
import logoSrc from "../../static/images/filter.svg";

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
    return <div>Загрузка...</div>;
  } else {
    return (
      <section class="product-cards">
        <Container fluid style={{ padding: "100px 0 0" }}>
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
          <ProductsPagination />
        </Container>
      </section>
    );
  }
};

export default Products;

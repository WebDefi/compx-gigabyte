import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import ProductItem from "./components/ProductItem";
import ProductsPagination from "./components/ProductsPagination.jsx";

const Products = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://3.249.81.155:3000/gigabyte/api/v1/items/1134?start=0&end=1")
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
      <Container fluid style={{ padding: "100px 0 0" }}>
        {items.map((item) => (
          <ProductItem
            key={item.id}
            title={item.name}
            price={item.price}
          ></ProductItem>
        ))}
        <ProductsPagination />
      </Container>
    );
  }
};

export default Products;

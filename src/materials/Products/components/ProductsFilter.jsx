import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import ProductsFilterComponent from "./ProductsFilterComponent";
import "./ProductsFilter.scss";

const ProductsFilter = ({
  filters,
  setFilters,
  FilterBtn,
  CleanBtn,
  logoSrc,
}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // fetching all filter values from BE
  useEffect(() => {
    fetch(
      "http://3.249.81.155:3000/gigabyte/api/v1/items/2"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.characteristics);
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
      <div className="ProductsFilter">
        <Container style={{ padding: "0" }}>
          <div className="ProductsFilter_block">
            <div>
              <img className="ProductsFilter__logo" src={logoSrc} />
            </div>
            <button className="ProductsFilter__btn">
              <span className="ProductsFilter__filter">{FilterBtn}</span>
            </button>
            <div className="ProductsFilter__lineBlock">
              <span className="ProductsFilter__line"></span>
            </div>
            <button className="ProductsFilter__btn ProductsFilter__btn--gray">
              <span className="ProductsFilter__clean">{CleanBtn}</span>
            </button>
          </div>
          {items.map((item) => (
            <ProductsFilterComponent
              name={item.name}
              alias={item.alias}
              values={item.values}
              filters={filters}
              setFilters={setFilters}
            />
          ))}
        </Container>
      </div>
    );
  }
};

export default ProductsFilter;

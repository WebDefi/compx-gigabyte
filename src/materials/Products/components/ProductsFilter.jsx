import React, { Fragment } from "react";
import { Container } from "reactstrap";
import ProductsFilterComponent from "./ProductsFilterComponent";
import "./ProductsFilter.scss";

const ProductsFilter = ({
  filters,
  characteristics,
  setFilters,
  FilterBtn,
  CleanBtn,
  logoSrc,
}) => {
  return characteristics ? (
    <div className="ProductsFilter">
      <Container style={{ padding: "0" }} className="FilterContainer">
        {characteristics.map((item) => (
          <ProductsFilterComponent
            name={item.name}
            alias={item.alias}
            values={item.values}
            filters={filters}
            setFilters={setFilters}
            key={item.alias}
          />
        ))}
      </Container>
    </div>
  ) : (
    <Fragment />
  );
};

export default ProductsFilter;

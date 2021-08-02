import React from "react";
import { Container } from "reactstrap";
import ProductsFilterComponent from "./ProductsFilterComponent";
import "./ProductsFilter.scss";

const ProductsFilter = ({ FilterBtn, CleanBtn, logoSrc }) => {
  const items = [
    { value: "Графічний чіп", key: "1" },
    { value: "Обсяг відео пам'яті", key: "2" },
    { value: "Рекомендований блок живлення", key: "3" },
    { value: "Додаткове живлення", key: "4" },
  ];
  return (
    <div className="ProductsFilter">
      <Container>
        <div className="ProductsFilter_block">
          <div>
            <img className="ProductsFilter__logo" src={logoSrc} />
          </div>
          <button className="ProductsFilter__btn">
            <span className="ProductsFilter__filter">{FilterBtn}</span>
          </button>
          <div>
            <span className="ProductsFilter__line"></span>
          </div>
          <button className="ProductsFilter__btn ProductsFilter__btn--gray">
            <span className="ProductsFilter__clean">{CleanBtn}</span>
          </button>
        </div>
        <ProductsFilterComponent items={items} />
      </Container>
    </div>
  );
};

export default ProductsFilter;

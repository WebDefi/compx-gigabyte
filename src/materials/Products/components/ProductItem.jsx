import React from "react";
import { Row, Col, Container } from "reactstrap";
import styles from "./ProductItem.scss";
import ProductsFilter from "../components/ProductsFilter";
import logoSrc from "../../../static/images/filter.svg";

// function onMouseMove = {(event) => {

// }}

const ProductItem = ({ title, price, key }) => {
  return (
    <div
      key={key}
      class="product-card"
      onMouseMove={(event) => {
        let card;
        if (event.target.className === "product-card") {
          card = event.target;
        } else {
          card = event.target.parentNode;
        }

        const { offsetX, offsetY } = event;
        console.log(offsetX, offsetY);
        let tiltY = (offsetX - card.clientWidth / 2) / 28;
        let tiltX = -(offsetY - card.clientHeight / 2) / 28;
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }}
      onMouseOut={(event) => {
        event.target.style.transform = "rotateX(0) rotateY(0)";
      }}
    >
      <div className="product-img"></div>
      <strong className="product-name">{title}</strong>
      <small className="product-price">{price}&#8372;</small>
    </div>
  );
};

export default ProductItem;

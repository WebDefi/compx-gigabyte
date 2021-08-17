import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import styles from "./ProductItem.scss";
import ProductsFilter from "../components/ProductsFilter";
import logoSrc from "../../../static/images/filter.svg";

// function onMouseMove = {(event) => {

// }}

const ProductItem = ({
  title,
  price,
  key,
  link,
  image,
  props = [],
  details,
}) => {
  const [modal, setModal] = useState(false);
  const { buttonLabel, className } = props;
  if (image === null) {
    return <p>Loading profile...</p>;
  }
  const toggle = () => setModal(!modal);
  return (
    <div key={key} class="product-card">
      <div className="product-box">
        <div
          className="product-img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <strong className="product-name">{title}</strong>
      <div className="product-price">
        <button className="product-btn btn-info" onClick={toggle}>
          <span>Подробнее</span>
        </button>
        <small >{price}&#8372;</small>
        <button className="product-btn">
          <span>Купить</span>
        </button>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ zIndex: 9999 }}
      >
        <ModalHeader toggle={toggle} style={{ backgroundColor: "#E2550B" }}>
          {title}
        </ModalHeader>
        <ModalBody style={{ backgroundColor: "#131313", color: "#fff" }}>
          <div
            dangerouslySetInnerHTML={{ __html: details }}
            style={{ color: "#fff" }}
          />
        </ModalBody>
        <ModalFooter style={{ backgroundColor: "#1E1E1E" }}>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <small style={{ fontSize: "20px", color: "#fa6812",fontWeight:"500" }}>
              {price}&#8372;
            </small>
            <button className="product-btn" style={{}}>
              <span>Купить</span>
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductItem;

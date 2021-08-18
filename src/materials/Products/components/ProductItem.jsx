import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
  alt,

}) => {
  const [modal, setModal] = useState(false);
  const { buttonLabel, className } = props;

  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div key={key} class="product-card" >
      <div className="product-box" onClick={toggle}>
        
      <LazyLoadImage
          width="100%"
          height="200px"
          src={image}
          className="product-img"
          placeholderSrc={process.env.PUBLIC_URL + "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"}
        ></LazyLoadImage>
         
        
      </div>
      <strong className="product-name" onClick={toggle}>{title}</strong>
      <div className="product-price">
        <small>{price}&#8372;</small>
        <a href={link}>
          <button className="product-btn">
            <span>Купить</span>
          </button>
        </a>
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
            <small
              style={{ fontSize: "20px", color: "#fa6812", fontWeight: "500" }}
            >
              {price}&#8372;
            </small>
            <a href={link}>
              <button className="product-btn" style={{ padding: 10 }}>
                <span>Купить</span>
              </button>
            </a>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductItem;

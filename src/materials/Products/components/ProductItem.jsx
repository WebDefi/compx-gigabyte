import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./ProductItem.scss";
import ProductsFilter from "../components/ProductsFilter";
import logoSrc from "../../../static/images/filter.svg";
import  placeholderImage  from '../../../static/images/placeholder-image.png'
import testImg from "../../../static/images/galery1.png"

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
    <div key={key} class="product-card">
      <div className="product-box" onClick={toggle}>
        <img src={image && image.length && image[0] || placeholderImage}  className="product-img"></img>
      </div>
      <strong className="product-name" title={title} onClick={toggle}>
        {title.slice(0, 48)}...
      </strong>
      <div className="product-price">
        <small>{price} &#8372;</small>
        <a href={link}>
          <button className="product-btn">
            <span>Детальніше</span>
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
                <span>Детальніше</span>
              </button>
            </a>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductItem;

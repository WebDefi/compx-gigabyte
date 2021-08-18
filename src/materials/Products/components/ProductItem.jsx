import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
    <div key={key} class="product-card">
      <div className="product-box" onClick={toggle}>
        {isLoading ? null : (
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6ampr39/fHx8fOzs7j4+P8/Pyvr6/d3d3FxcX29va6urqYmJjs7OzU1NSlpaW1tbWtra3n5+e/v78TS0zBAAACkUlEQVR4nO3b63KCMBCGYUwUUVEO6v3fagWVY4LYZMbZnff51xaZ5jON7CZNEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQb5tvI8qzX4/nH84XG5Upfj2ir2V2E5fZ/XpIX9saMnhkYLIkiyRJjdgMoiEDMmiQgfwM8rSu77ew2wnPoLTmwdZBs0J2BuXrYckcQm4nOoP+WcmWAbcTnUHZPy9eA24nOoN7n0HI54ToDM5k8PjluwyqgNuJzqDoaugPg8gWZ4noDAYLwuIg75fLeeHHsjNIzrZJwWwW+0DNsmEWPjiEZ5AcD8ZUu8VZ8HyQMifvBdIz+PS33i8adu+7Qn4Gn1Tdupl7rlCfQb9seosK7RkcBy1o30iVZ5CPOtDW3WhQnsF13IV3v0p3BqfJRoSpXVepzmA/24+yqeMyzRm4tqOs44lSUwa3yfgOri25av5CPRnklR33VlPnrqSZV09qMsiqSWV082xOz1uPajJ49pTM/f115k6guWa6JGjJ4N1lt8fXN2rv/vysjFaSQdFXBc/KKF04ptFPliclGVR9Bu27XCyeVOkmy5OODAZN9rYyyip/AIPJ8qIig+PoXbf7YdPdncFoSdCQQT4ZceV+MhiFMBy0hgyu0yGvOLI17KwpyGBaHK5jtt0N5GcwLw7XZdB31sRn8O+ziqYro8Vn4CwOV+k6a9Iz+PwRsKC7h+gMfMXhKu/OmuwM/MXhKq8yWnYG/uJw5Uxoy2jRGZTBZ/jboxuSM1guDtdNhKazJjiDbNMe0AxzKUVnkO+jEJxBxNtJzWCTxlNLzSB8KehJ/H+mJGYAjaDjzj9SnHZRuXZiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECXP1XDHv7U4SNFAAAAAElFTkSuQmCC" />
        
        )}
        <img
          className="product-img"
          src={image}
          style={isLoading ? {} : { display: 'none' }}
 
        onLoad={() => setIsLoading(true)}
        ></img>
      </div>
      <strong className="product-name" onClick={toggle}>
        {title}
      </strong>
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

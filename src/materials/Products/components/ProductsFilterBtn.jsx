import React from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductsFilterBtn = ({ textBtn }) => {
  return (
    <div
      style={{
        marginLeft: "62px",
      }}
    >
      <button
        className="ProductsFilterBtn"
        style={{
          textTransform: "uppercase",
          outline: "none",
          border: "1px solid white",
          borderRadius: "3%",
          padding: "8px",
          backgroundColor: "transparent",
          color: "white",
          fontSize: "20px",
          display: "none",
        }}
      >
        <FontAwesomeIcon icon={faFilter} className="ProductsFilterBtn__icon" />
        {textBtn}
      </button>
    </div>
  );
};

export default ProductsFilterBtn;

import React from "react";
import "./ProductsFilterComponent.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductsFilterComponent = ({ items }) => {
  return (
    <div className="filterComponent">
      <ul className="filterComponent_ul">
        {items.map((item) => (
          <li className="filterComponent_li">
            <div className="filterComponent_div">
              <h3 className="filterComponent__title" key={item.key}>
                {item.value}
                <FontAwesomeIcon
                  icon={faPlus}
                  className="filterComponent__icon"
                  style={{ position: "absolute", right: "0", margin: "12px 0" }}
                />
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsFilterComponent;

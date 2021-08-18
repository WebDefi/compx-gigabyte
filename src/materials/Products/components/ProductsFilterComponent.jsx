import React from "react";
import "./ProductsFilterComponent.scss";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductsFilterComponent = ({ name, alias, values }) => {
  const [show, showState] = React.useState(false);
  return (
    <div className="filterComponent">
      <ul className="filterComponent_ul">
        <li className="filterComponent_li" onClick={() => showState(!show)}>
          <div className="filterComponent_div">
            <h3 className="filterComponent__title">
              {alias}
              <FontAwesomeIcon
                icon={show ? faMinus : faPlus}
                className="filterComponent__icon"
                style={{ position: "absolute", right: "0", margin: "12px 0" }}
              />
            </h3>
          </div>
        </li>
        {show ? (
          <div>
            {values.map((item, index) => (
              <div>
                <input
                  className="filterComponent__checkbox"
                  type="checkbox"
                  value={item}
                  id={`#${item}-${index}`}
                ></input>
                <label for={`#${item}-${index}`}>{item}</label>
              </div>
            ))}
          </div>
        ) : null}
      </ul>
    </div>
  );
};

export default ProductsFilterComponent;

import React from "react";
import "./ProductsFilterComponent.scss";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductsFilterComponent = ({
  filters,
  setFilters,
  name,
  alias,
  values,
}) => {
  const [show, showState] = React.useState(false);

  const updateFilter = (filterValue) => {
    console.log(filters);
    if (!filters.find((value) => value === filterValue)) {
      filters.push(filterValue);
      setFilters(filters);
    } else {
      setFilters(filters.filter((value) => value === filterValue));
    }
  };

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
          <div style={{ width: "300px", columnCount: "2" }}>
            {values.map((item, index) => (
              <div>
                <input
                  className="filterComponent__checkbox"
                  type="checkbox"
                  value={item}
                  // onInput={(event) => updateFilter(item)}
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

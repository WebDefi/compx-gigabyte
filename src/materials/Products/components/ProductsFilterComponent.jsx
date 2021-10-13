import React from "react";
import "./ProductsFilterComponent.scss";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductsFilterComponent = ({ filters, setFilters, alias, values }) => {
  const [show, showState] = React.useState(false);

  const updateFilter = (filterValue) => {
    if (filters.includes(filterValue)) {
      setFilters(filters.filter((value) => value !== filterValue));
    } else {
      setFilters([...filters, filterValue]);
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
          <div style={{ width: "260px", columnCount: "2", marginTop: 10 }}>
            {values.map((item, index) => (
              <div style={{fontSize: 17}}>
                <input
                className="filterComponent__checkbox"
                type="checkbox"
                value={item}
                checked={filters.includes(item)}
                onChange={() => updateFilter(item)}
                id={`#${item}-${index}`}
                />
                <label htmlFor={`#${item}-${index}`}>{item}</label>
              </div>
            ))}
          </div>
        ) : null}
      </ul>
    </div>
  );
};

export default ProductsFilterComponent;

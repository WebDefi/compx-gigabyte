import React from "react";
import "./ProductsFilterComponent.scss";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

const ProductsFilterComponent = ({ filters, setFilters, alias, values }) => {
  const [show, showState] = React.useState(false);
  const { id: categoryId } = useParams();

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
        <li
          className="filterComponent_li"
          onClick={() => {
            showState(!show);
            if (categoryId == 8) {
            }
          }}
        >
          <div className="filterComponent_div">
            <h3 className="filterComponent__title">{alias}</h3>
            <FontAwesomeIcon
              icon={show ? faMinus : faPlus}
              className="filterComponent__icon"
              style={{}}
            />
          </div>
        </li>
        {show ? (
          <div
            style={{
              width: "290px",
              columnCount: "1",
              marginTop: 15,
              paddingLeft: 25,
            }}
          >
            {values.map((item, index) => (
              <div style={{ fontSize: 17 }}>
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

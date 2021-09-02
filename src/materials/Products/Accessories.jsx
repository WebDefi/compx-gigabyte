import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ProductItem from "./components/ProductItem";
import ProductsPagination from "./components/ProductsPagination.jsx";
import ProductsFilter from "./components/ProductsFilter";
import ProductsFilterBtn from "./components/ProductsFilterBtn";
import logoSrc from "../../static/images/filter.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const Accessories = ({ currentPage, filters, itemsPerPage }) => {
  console.log('CURRENTPAGE', currentPage);
  const [items, setItems] = useState([]);

  const [show, showState] = React.useState(false);
  return (
    <div>
      <div onClick={() => showState(!show)}>
        <ProductsFilterBtn textBtn="Фільтр" />
      </div>
      <Row className="products_rowFirst" style={{ padding: "0 40px" }}>
        <Col xs="" lg="9" xl="9">
          <Row className="products_row" style={{ paddingRight: "60px" }}>
            {items.map((item) => (
              <Col xs="6" lg="4" xl="4" style={{ marginBottom: "30px" }}>
                <ProductItem
                  key={item.id}
                  title={item.name}
                  price={item.price}
                  link={item.url}
                  image={item.images}
                  details={item.detaileddescru}
                ></ProductItem>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Accessories;

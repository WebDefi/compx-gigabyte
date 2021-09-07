import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ProductItem from "./components/ProductItem";
import ProductsPagination from "./components/ProductsPagination.jsx";
import ProductsFilter from "./components/ProductsFilter";
import ProductsFilterBtn from "./components/ProductsFilterBtn";
import logoSrc from "../../static/images/filter.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const Items = ({ currentPage, filters, itemsPerPage, setFilters, categoryId }) => {
  
  console.log("CURRENTPAGE", currentPage);
  console.log("filters", filters);
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  useEffect(() => {
    let cleanup = false;
    const fetchProducts = async (page = 1) => {
      const queryStringParams = {
        start: (page - 1) * itemsPerPage,
        end: page * itemsPerPage,
        charValues: filters.length > 0 ? encodeURI(JSON.stringify(filters)): "",
      };
      
      const baseUrl = `http://3.249.81.155:3000/gigabyte/api/v1/items/${categoryId}`;
      if (queryStringParams.charValues == "") delete queryStringParams["charValues"];
      const url = `${baseUrl}?${Object.entries(queryStringParams)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`;
      console.log('url:', url);
      const res = await axios.get(url);
      console.log(res);
      if (!cleanup) setItems(res.data.items);
    };

    fetchProducts(currentPage);

    return () => (cleanup = true);
  }, [currentPage, filters, itemsPerPage]);

  const [show, showState] = React.useState(false);
  return (
    <div>
      <div onClick={() => showState(!show)}>
        <ProductsFilterBtn textBtn="Фільтр" />
      </div>
      <Row className="products_rowFirst" style={{ padding: "0 40px" }}>
        <Col xs="12" lg="3" xl="3">
          <div className="ProductsFilterDesktop">
            <ProductsFilter
              FilterBtn="Фільтр"
              CleanBtn="Очистити"
              logoSrc={logoSrc}
              filters={filters}
              setFilters={setFilters}
              categoryId={categoryId}
            ></ProductsFilter>
          </div>
          {show ? (
            <div className="ProductsFilterMobile">
              <ProductsFilter
                FilterBtn="Фільтр"
                CleanBtn="Очистити"
                logoSrc={logoSrc}
              ></ProductsFilter>
            </div>
          ) : null}
        </Col>

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

export default Items;

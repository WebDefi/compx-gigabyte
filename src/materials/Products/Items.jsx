import React, { Fragment, useEffect, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import ProductItem from "./components/ProductItem";
import ProductsFilter from "./components/ProductsFilter";
import logoSrc from "../../static/images/filter.svg";
import axios from "axios";
import getConfig from "../../config";
import "./Products.scss";
import Slider from "react-slick";
import { sliderSettings } from "../Devices/Devices";
import DevicesComponent from "../Devices/components/DevicesComponent";
import deviceBg from "../../static/images/deviceBg.png";
import groupService from "../../service/groupService";

const Items = ({
  currentPage,
  filters,
  itemsPerPage,
  setFilters,
  categoryId,
  setTotalPages,
}) => {
  const groups = groupService.groups;
  //   console.log(groups);
  //   console.log("CURRENTPAGE", currentPage);
  //   console.log("filters", filters);
  const [items, setItems] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  useEffect(() => {
    let cleanup = false;
    const fetchProducts = async (page = 1) => {
      const queryStringParams = {
        start: (page - 1) * itemsPerPage,
        end: page * itemsPerPage,
        charValues:
          filters.length > 0 ? encodeURI(JSON.stringify(filters)) : "",
      };
      const baseUrl = `https://${
        getConfig().API_ENDPOINT
      }/gigabyte/api/v1/items/${categoryId}`;
      if (queryStringParams.charValues === "")
        delete queryStringParams["charValues"];
      const url = `${baseUrl}?${Object.entries(queryStringParams)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`;
      const res = await axios.get(url);
      if (!cleanup) {
        setItems(res.data.items);
        setCharacteristics(res.data.characteristics);
        setTotalPages(res.data.numberOfPages);
      }
    };

    fetchProducts(currentPage);

    return () => (cleanup = true);
  }, [currentPage, filters, itemsPerPage]);

  const [show, showState] = React.useState(false);
  return (
    <Fragment>
      <div class="spirit-breaker">
        <div className="podpivasnik">
          <Container className="devicesSection">
            <Slider {...sliderSettings}>
              {groups.map((cat, idx) => {
                return (
                  <DevicesComponent
                    title={cat.title}
                    key={idx.id}
                    deviceImg={cat.imageUrl}
                    deviceBg={deviceBg}
                    currentCategory={categoryId}
                    categoryId={cat.id}
                  />
                );
              })}
            </Slider>
          </Container>
        </div>
        {/* <div className="gradient"></div> */}
        <div class="products-section-container">
          <div className="ProductsFilter_block">
            <div
              style={{ display: "inline-flex", justifyContent: "flex-start" }}
            >
              <div style={{ paddingRight: 5 }}>
                <img className="ProductsFilter__logo" src={logoSrc} />
              </div>
              <button className="ProductsFilter__btn">
                <span
                  className="ProductsFilter__filter"
                  style={{ fontSize: 18 }}
                >
                  Фільтр
                </span>
              </button>
              <div
                className="ProductsFilter__lineBlock"
                style={{ paddingRight: 40, paddingLeft: 40 }}
              >
                <span className="ProductsFilter__line"></span>
              </div>
              <button
                className="ProductsFilter__btn ProductsFilter__btn--gray"
                onClick={() => setFilters([])}
              >
                <span
                  className="ProductsFilter__clean"
                  style={{ fontSize: 18 }}
                >
                  Очистити
                </span>
              </button>
            </div>
            <div className="sortBy">
              <Dropdown onClick={toggle} isOpen={isOpen}>
                <DropdownToggle style={{ fontSize: 20 }} caret>
                  Сортировать
                </DropdownToggle>
                <DropdownMenu style={{flexDirection: "column", padding: 10}}>
                  <DropdownItem>
                    <a>Цена по воз</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a>Цена по сниж</a>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <Row className="products_rowFirst" style={{ padding: "0 40px" }}>
            <Col xs="12" lg="3" xl="3">
              <div className="ProductsFilterDesktop">
                <ProductsFilter
                  FilterBtn="Фільтр"
                  CleanBtn="Очистити"
                  characteristics={characteristics}
                  logoSrc={logoSrc}
                  filters={filters}
                  setFilters={setFilters}
                  categoryId={categoryId}
                />
              </div>
              <div className="ProductsFilterMobile">
                <ProductsFilter
                  FilterBtn="Фільтр"
                  CleanBtn="Очистити"
                  characteristics={characteristics}
                  logoSrc={logoSrc}
                  filters={filters}
                  setFilters={setFilters}
                  categoryId={categoryId}
                />
              </div>
            </Col>

            <Col xs="" lg="9" xl="9">
              <Row className="products_row" style={{ paddingRight: "60px" }}>
                {items.map((item) => (
                  <Col xs="6" lg="4" xl="4" style={{ marginBottom: "30px" }}>
                    <ProductItem
                      key={item.id}
                      characteristics={item.characteristics}
                      title={item.name}
                      price={item.price}
                      link={item.url}
                      oldPrice={item.oldPrice}
                      image={item.images}
                      details={item.detaileddescru}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Items;

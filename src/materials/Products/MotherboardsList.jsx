import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import getConfig from "../../config";
import Motherboards from "./Motherboards";
import ProductsPagination from "./components/ProductsPagination";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../common/Breacrumbs/Breadcrumbs";
import ProductsBanner from "./components/ProductsBanner";
import bannerImgMotherBoard from "../../static/images/banerMotherboards.jpeg";

const MotherboardsList = ({ itemsNumber, itemsPerPage }) => {
  // Get config

  useEffect(() => {
    fetch("http://3.249.81.155:3000/gigabyte/api/v1/items/1?start=0&end=1")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPages(result);
          console.log(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pages, setPages] = useState([]);

  const config = getConfig();
  console.log("CONFIG", config);
  // Get current items

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [items, setItems] = useState([]);

  const [currentPage, setCurrentPage] = useState();
  const [filters, setFilters] = useState([]);
  //change page
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section class="product-cards" style={{ padding: "0" }}>
      <Container fluid style={{ padding: "0 0 60px " }}>
        <ProductsBanner bannerImg={bannerImgMotherBoard} />
        <Breadcrumbs />
        <Motherboards
          currentPage={currentPage}
          itemsPerPage={config.ITEMS_PER_PAGE}
          filters={filters}
        />
        <Row>
          <Col xs="12 ">
            <ProductsPagination
              itemsPerPage={config.ITEMS_PER_PAGE}
              totalItems={100}
              //pages.numberOfItems
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MotherboardsList;

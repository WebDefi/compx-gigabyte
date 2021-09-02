import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import getConfig from "../../config";
import GraphicsCards from "./GraphicsCards";
import ProductsPagination from "./components/ProductsPagination";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../common/Breacrumbs/Breadcrumbs";
import ProductsBanner from "./components/ProductsBanner";
const GraphicsCardsList = ({ itemsNumber, itemsPerPage }) => {
  // Get config
  const config = getConfig();
  console.log("CONFIG", config);
  // Get current items

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);
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
        <ProductsBanner />
        <Breadcrumbs />
        <GraphicsCards
          currentPage={currentPage}
          itemsPerPage={config.ITEMS_PER_PAGE}
          filters={filters}
          setFilters={setFilters}
        />
        <Row>
          <Col xs="12">
            <ProductsPagination
              itemsPerPage={config.ITEMS_PER_PAGE}
              totalItems={100}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GraphicsCardsList;

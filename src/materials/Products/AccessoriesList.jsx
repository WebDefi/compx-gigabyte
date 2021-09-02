import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import getConfig from '../../config';
import Accessories from "./Accessories";
import ProductsPagination from "./components/ProductsPagination";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../common/Breacrumbs/Breadcrumbs";
import ProductsBanner from "./components/ProductsBanner";
import ProductsFilter from "./components/ProductsFilter";
const AccessoriesList = ({itemsNumber, itemsPerPage, filters, currentPage, setCurrentPage}) => {
  // Get config
  const config = getConfig();
  console.log('CONFIG', config);
  // Get current items

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let cleanup = false;
    const fetchProducts = async (page = 1) => {
      const queryStringParams = {
        start: (page-1)*itemsPerPage,
        end: page*itemsPerPage,
      }
      const baseUrl = `http://3.249.81.155:3000/gigabyte/api/v1/items/8`;
      const url = `${baseUrl}?${Object.entries(queryStringParams).map(([key, value]) => `${key}=${value}`).join('&')}`;
      console.log(url);
      const res = await axios.get(url);
      console.log(res);
      if(!cleanup) setItems(res.data.items);
    };

    fetchProducts(currentPage);

    return () => cleanup = true;
  }, [currentPage, filters, itemsPerPage]);

  

  const [show, showState] = React.useState(false);
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
        <Accessories currentPage={currentPage} itemsPerPage={config.ITEMS_PER_PAGE} filters={filters}/>
        <Row>
          <Col xs="12 ">
            
            <ProductsPagination
              itemsPerPage={config.ITEMS_PER_PAGE}
              totalItems={100}
              paginate={paginate}
            />
            <Row className="products_rowFirst" style={{ padding: "0 40px" }}>
        <Col xs="12" lg="3" xl="3">
          <div className="ProductsFilterDesktop">
            <ProductsFilter
              FilterBtn="Фільтр"
              CleanBtn="Очистити"
              
            ></ProductsFilter>
          </div>
          {show ? (
            <div className="ProductsFilterMobile">
              <ProductsFilter
                FilterBtn="Фільтр"
                CleanBtn="Очистити"
                
              ></ProductsFilter>
            </div>
          ) : null}
        </Col>
        </Row>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AccessoriesList;

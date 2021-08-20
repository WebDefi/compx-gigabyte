import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import Products from "./Products";
import ProductsPagination from "./components/ProductsPagination";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../common/Breacrumbs/Breadcrumbs";
import ProductsBanner from "./components/ProductsBanner";
const ProductsList = () => {
  // Get current items

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  //change page
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        "http://3.249.81.155:3000/gigabyte/api/v1/items/1"
      );
      console.log(res);
      setItems(res.data.items);
    };

    fetchProducts();
  }, []);

  return (
    <section class="product-cards" style={{ padding: "0" }}>
      <Container fluid style={{ padding: "0 0 60px " }}>
        <ProductsBanner />
        <Breadcrumbs />
        <Products items={currentItems} />
        <Row>
          <Col xs="12 ">
            <button className="page-i" onClick={nextPage}>
              Next
            </button>
            <ProductsPagination
              itemsPerPage={itemsPerPage}
              totalItems={items.length}
              paginate={paginate}
            />
            <button className="page-i" onClick={prevPage}>
              Prev
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductsList;

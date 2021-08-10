import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import Products from "./Products";
import ProductsPagination from "./components/ProductsPagination";
const ProductsList = () => {
  // Get current items
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        "http://3.249.81.155:3000/gigabyte/api/v1/items/1"
      );
      setItems(res.data);
    };
    fetchProducts();
  }, []);
  return (
    <section class="product-cards">
      <Container fluid style={{ padding: "100px 0 0" }}>
        

        <Products items={currentItems} />
        <Row>
          <Col xs="12 ">
            <ProductsPagination
              itemsPerPage={itemsPerPage}
              totalItems={items.length}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductsList;

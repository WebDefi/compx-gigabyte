import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import Products from "./Products";
import ProductsPagination from "./components/ProductsPagination";
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

  const [catsTree, setCatsTree] = useState([]);

  //change page
  

  // useEffect(() => {
  //   const getData = async () => {      
  //     let itemTree = [];
  //     const resAllCats = await fetch(`http://3.249.81.155:3000/gigabyte/api/v1/groups`);            
  //     if(!resAllCats.status === 200) {
  //       console.log('Error while fetching data');
  //     } else {
  //       const categories = await resAllCats.json();
  //       for ( const { id: category_id, name: catName, pictureUrl } of categories) {          
  //         const resCategories = await fetch(`http://3.249.81.155:3000/gigabyte/api/v1/items/${category_id}`);
  //         if(!resCategories.status === 200) {
  //           console.log('Error while fetching data');
  //         } else {
  //           const cats = await resCategories.json();
  //           itemTree.push({
  //             id: category_id, name: catName, pictureUrl,
  //             cats: cats.items.map(({ category }) => ({id: category.id, name: category.title}))
  //           });            
  //         }
  //       }
  //       setCatsTree(catsTree);
  //     }
  //   };
  //   getData();    
  // }, [setCatsTree]);  
  // console.log(catsTree);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        "http://3.249.81.155:3000/gigabyte/api/v1/items/1"
      );
      console.log(res);
      setItems(res.data);
      
    };
    
    fetchProducts();
  }, []);

  
  return (
    <section class="product-cards">
      <Container fluid style={{ padding: "60px 0 0" }}>
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

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./App.scss";
import Header from "./materials/Header/Header";
import Devices from "./materials/Devices/Devices";
import SliderAorus from "./materials/SliderAorus/SliderAorus";
import News from "./materials/News/News";
import Footer from "./materials/Footer/Footer";
import Gallery from "./materials/Gallery/Gallery";
import Products from "./materials/Products/Products";
import ProductsList from "./materials/Products/ProductsList";
import ProductList2 from "./materials/Products/ProductList2";
import React from "react";
import { getRoutes } from "./routes";
import { withRouter, Route, BrowserRouter, Redirect } from "react-router-dom";
import HomePage from "./materials/HomePage/HomePage";
import "./static/breakpoints.scss";
import ProductItem from "./materials/Products/components/ProductItem";


function App() {

  const [itemsNumber, setItemsNumber] = useState(0);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await axios.get(
  //       "http://3.249.81.155:3000/gigabyte/api/v1/items/1"
  //     );
  //     console.log('ITEMS', res);
  //     setItemsNumber(res.data.items.length);
  //   };

  //   fetchProducts();
  // }, []);

  console.log('ITEMS', itemsNumber);
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        {/* { getRoutes() }  */}
        {/* <SliderAorus />
        <Devices />
        <News />
        <Gallery /> */}
        {/* <ProductsList /> */}
        <Route path="/products/2" component={ProductList2} />
        <Route path="/products/1" component={() => <ProductsList itemsNumber={itemsNumber}/>} />
        <Route path="/home" component={HomePage} />
        <Redirect from="/" to="/home" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default withRouter(App);

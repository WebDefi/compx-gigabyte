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
import Monitors from './materials/Products/Monitors';
import SSD from './materials/Products/SSD';

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
        <Route path="/Мониторы" component={Monitors} />
        <Route path="/Материнские платы" component={Monitors} />
        <Route path="/Ноутбуки" component={Monitors} />
        <Route path="/Корпуса" component={Monitors} />
        <Route path="/Аксессуары" component={Monitors} />
        <Route path="/ССД" component={Monitors} />
        <Route path="/Видеокарты" component={ProductList2} />
        <Route path="/Продукты" component={() => <ProductsList itemsNumber={itemsNumber}/>} />
        <Route path="/home" component={HomePage} />
        <Redirect from="/" to="/home" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default withRouter(App);

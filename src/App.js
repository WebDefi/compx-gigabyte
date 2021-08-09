import styles from "./App.scss";
import Header from "./materials/Header/Header";
import Devices from "./materials/Devices/Devices";
import SliderAorus from "./materials/SliderAorus/SliderAorus";
import News from "./materials/News/News";
import Footer from "./materials/Footer/Footer";
import Gallery from "./materials/Gallery/Gallery";
import Products from "./materials/Products/Products";
import ProductsList from "./materials/Products/ProductsList";
import React from "react";
import { getRoutes } from "./routes";
import { withRouter, Route, BrowserRouter, Redirect } from "react-router-dom";
import HomePage from "./materials/HomePage/HomePage";
import "./static/breakpoints.scss";
import ProductItem from "./materials/Products/components/ProductItem";

function App() {
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
        <Route path="/products" component={ProductsList} />
        <Route path="/home" component={HomePage} />
        <Redirect from="/" to="/home" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default withRouter(App);

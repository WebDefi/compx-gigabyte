import styles from "./App.scss";
import Header from "./materials/Header/Header";
import Devices from "./materials/Devices/Devices";
import SliderAorus from "./materials/SliderAorus/SliderAorus";
import News from "./materials/News/News";
import Footer from "./materials/Footer/Footer";
import Gallery from "./materials/Gallery/Gallery";
import Products from "./materials/Products/Products";
import React from "react";
import { getRoutes } from "./routes";
import { withRouter } from "react-router-dom";
import "./static/breakpoints.scss";


function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* { getRoutes() }  */}
      <SliderAorus />
      <Devices />
      <News />
      <Gallery />
      <Products />
      <Footer />
    </div>
  );
}

export default withRouter(App);

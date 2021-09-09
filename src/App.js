import { useEffect, useState } from "react";
import { Suspense, lazy } from "react";
import axios from "axios";
import styles from "./App.scss";
import Header from "./materials/Header/Header";
import Devices from "./materials/Devices/Devices";
import SliderAorus from "./materials/SliderAorus/SliderAorus";
import News from "./materials/News/News";
import Footer from "./materials/Footer/Footer";
import Gallery from "./materials/Gallery/Gallery";
import Products from "./materials/Products/Items";
import ItemsList from "./materials/Products/ItemsList";
import ProductList2 from "./materials/Products/ProductList2";
import React from "react";
import Preloader from "./common/Preloader/Preloader";
import { getRoutes } from "./routes";
import {
  withRouter,
  Route,
  BrowserRouter,
  Redirect,
  Switch,
} from "react-router-dom";
import HomePage from "./materials/HomePage/HomePage";
import "./static/breakpoints.scss";
import MonitorsList from "./materials/Products/MonitorsList";
import SSDList from "./materials/Products/SSDList";
import MotherboardsList from "./materials/Products/MotherboardsList";
import CorpsList from "./materials/Products/CorpsList";
import BlocksList from "./materials/Products/BlocksList";
const AccessoriesList = lazy(() =>
  import("./materials/Products/AccessoriesList")
);
const NotebooksList = lazy(() => import("./materials/Products/NotebooksList"));

function App() {
  const [itemsNumber, setItemsNumber] = useState(0);

  console.log("ITEMS", itemsNumber);
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Suspense fallback={<Preloader />}>
          <Header />
          {getRoutes()}
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default withRouter(App);

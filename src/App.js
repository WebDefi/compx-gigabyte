import { useEffect, useState } from 'react';
import { Suspense, lazy } from "react";
import axios from 'axios';
import styles from "./App.scss";
import Header from "./materials/Header/Header";
import Devices from "./materials/Devices/Devices";
import SliderAorus from "./materials/SliderAorus/SliderAorus";
import News from "./materials/News/News";
import Footer from "./materials/Footer/Footer";
import Gallery from "./materials/Gallery/Gallery";
import Products from "./materials/Products/GraphicsCards";
import GraphicsCardsList from "./materials/Products/GraphicsCardsList";
import ProductList2 from "./materials/Products/ProductList2";
import React from "react";
import Preloader from './common/Preloader/Preloader';
import { getRoutes } from "./routes";
import { withRouter, Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import HomePage from "./materials/HomePage/HomePage";
import "./static/breakpoints.scss";
import MonitorsList from './materials/Products/MonitorsList'
import SSDList from './materials/Products/SSDList'
import MotherboardsList from './materials/Products/MotherboardsList';
import CorpsList from './materials/Products/CorpsList'
import BlocksList from './materials/Products/BlocksList'
const AccessoriesList = lazy(() => import("./materials/Products/AccessoriesList"));
const NotebooksList = lazy(() => import("./materials/Products/NotebooksList"));

function App() {

  const [itemsNumber, setItemsNumber] = useState(0);

  console.log('ITEMS', itemsNumber);
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Suspense fallback={<Preloader/>}>
     
            <Header />
            <Route path="/Мониторы"  component={() => <MonitorsList itemsNumber={itemsNumber}/>} />
            <Route path="/Материнские платы" component={() => <MotherboardsList itemsNumber={itemsNumber}/>} />
            <Route path="/Ноутбуки" component={() => <NotebooksList itemsNumber={itemsNumber}/>} />
            <Route path="/Корпуса" component={CorpsList} component={() => <MonitorsList itemsNumber={itemsNumber}/>} />
            <Route path="/Аксессуары" component={() => <AccessoriesList itemsNumber={itemsNumber}/>} />
            <Route path="/ССД" component={() => <SSDList itemsNumber={itemsNumber}/>} />
            <Route path="/Видеокарты" component={() => <GraphicsCardsList itemsNumber={itemsNumber}/>} />
            <Route path="/home" component={HomePage} />
            <Route path="/Блоки питания" component={() => <BlocksList itemsNumber={itemsNumber}/>} />
            <Redirect from="/" to="/home" />
            <Footer />
          
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default withRouter(App);

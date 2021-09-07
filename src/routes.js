import { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import axios from "axios";
const Header = lazy(() => import("./materials/Header/Header"));
const Devices = lazy(() => import("./materials/Devices/Devices"));
const SliderAorus = lazy(() => import("./materials/SliderAorus/SliderAorus"));
const News = lazy(() => import("./materials/News/News"));
const Footer = lazy(() => import("./materials/Footer/Footer"));
const Gallery = lazy(() => import("./materials/Gallery/Gallery"));
const Products = lazy(() => import("./materials/Products/Items"));
const ItemsList = lazy(() =>
  import("./materials/Products/ItemsList")
);
const ProductList2 = lazy(() => import("./materials/Products/ProductList2"));

const Preloader = lazy(() => import("./common/Preloader/Preloader"));
const HomePage = lazy(() => import("./materials/HomePage/HomePage"));

const MonitorsList = lazy(() => import("./materials/Products/MonitorsList"));
const SSDList = lazy(() => import("./materials/Products/SSDList"));
const MotherboardsList = lazy(() =>
  import("./materials/Products/MotherboardsList")
);
const CorpsList = lazy(() => import("./materials/Products/CorpsList"));
const BlocksList = lazy(() => import("./materials/Products/BlocksList"));
const AccessoriesList = lazy(() =>
  import("./materials/Products/AccessoriesList")
);
const NotebooksList = lazy(() => import("./materials/Products/NotebooksList"));

export const getRoutes = ( itemsNumber) => {
  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route path="/category/:id" component={ItemsList} />
        <Route path="/home" component={HomePage} />
        {/* <Route
          path="/Мониторы"
          component={(<MonitorsList itemsNumber={itemsNumber} />)}
        />
        <Route
          path="/Материнские платы"
          component={() => <MotherboardsList itemsNumber={itemsNumber} />}
        />
        <Route
          path="/Ноутбуки"
          component={() => <NotebooksList itemsNumber={itemsNumber} />}
        />
        <Route
          path="/Корпуса"
          component={CorpsList}
          component={() => <MonitorsList itemsNumber={itemsNumber} />}
        />
        <Route
          path="/Аксессуары"
          component={() => <AccessoriesList itemsNumber={itemsNumber} />}
        />
        <Route
          path="/ССД"
          component={() => <SSDList itemsNumber={itemsNumber} />}
        />
        <Route
          path="/Видеокарты"
          component={() => <GraphicsCardsList itemsNumber={itemsNumber} />}
        />
        
        <Route
          path="/Блоки питания"
          component={() => <BlocksList itemsNumber={itemsNumber} />}
        /> */}
        <Redirect from="/" to="/home" />
      </Switch>
    </Suspense>
  );
};

import React, { Fragment, Suspense, useEffect, useState } from "react";
import styles from "./App.scss";
import Header from "./materials/Header/Header";
import Footer from "./materials/Footer/Footer";
import Preloader from "./common/Preloader/Preloader";
import { Routes } from "./routes";
import { BrowserRouter, withRouter } from "react-router-dom";
import "./static/breakpoints.scss";
import groupService from "./service/groupService";
import getConfig from "./config";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Suspense fallback={<Preloader />}>
          <ApplicationBody />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

function ApplicationBody() {
  const [isGroupsLoaded, setGroupsLoaded] = useState(false);
  const [isTimerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimerEnded(true);
    }, getConfig().PRELOADER_TIME);
    groupService.receiveGroups().then((res) => {
      groupService.groups = res.data.groups;
      setGroupsLoaded(true);
    });
  }, []);

  return isGroupsLoaded && isTimerEnded ? (
    <Fragment>
      <Header />
      {Routes}
      <Footer />
    </Fragment>
  ) : (
    <Preloader />
  );
}

export default withRouter(App);

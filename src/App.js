import React, {Fragment, Suspense, useEffect, useState} from "react";
import styles from "./App.scss";
import Header from "./materials/Header/Header";
import Footer from "./materials/Footer/Footer";
import Preloader from "./common/Preloader/Preloader";
import {Routes} from "./routes";
import {BrowserRouter, withRouter} from "react-router-dom";
import "./static/breakpoints.scss";
import groupService from "./service/groupService";

function App() {
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Suspense fallback={<Preloader/>}>
                    <ApplicationBody/>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

function ApplicationBody() {
    const [isGroupsLoaded, setGroupsLoaded] = useState(false);

    useEffect(() => {
        groupService.receiveGroups().then(res => {
            groupService.groups = res.data.groups;
            setGroupsLoaded(true);
        });
    }, []);

    return isGroupsLoaded ? (
        <Fragment>
            <Header/>
            {Routes}
            <Footer/>
        </Fragment>
    ) : <Fragment/>;
}

export default withRouter(App);

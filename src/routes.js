import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./materials/HomePage/HomePage";
import ItemsList from "./materials/Products/ItemsList";

export const Routes =
    <Router forceRefresh={true}>
        <Switch>
            <Route path="/category/:id" component={ItemsList}/>
            <Route path="/home" component={HomePage}/>
            <Redirect from="/" to="/home"/>
        </Switch>
    </Router>;

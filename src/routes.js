import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./materials/HomePage/HomePage";
import ItemsList from "./materials/Products/ItemsList";
import AdminPanel from "./materials/Admin/Admin"

export const Routes =
    <Router forceRefresh={true}>
        <Switch>
            <Route path="/category/:id" component={ItemsList}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/admin" component={AdminPanel} />
            <Redirect from="/" to="/home"/>
        </Switch>
    </Router>;

import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import SignInForm from "../Components/signInForm";
import Home from "../Pages/Homes";

const Routing = () => {
    return (
        <Router>
        <Switch>
            {/* <Redirect from="/" to="/register" /> */}
            <Route path="/" exact component={SignInForm} />
            <Route path="/map" exact component={Home} />
            
        </Switch>
    </Router>
    );
}

export default Routing;
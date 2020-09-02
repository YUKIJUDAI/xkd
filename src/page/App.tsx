import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../store/index";

// main
import Home from "./home/home";

// login
import Login from "../page/login/login";
import Registered from "../page/login/registered";
import Forget from "../page/login/forget";

const store = configureStore(); 

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/registered" component={Registered}></Route>
                    <Route path="/forget" component={Forget}></Route>
                </HashRouter>
            </Provider>
        );
    }
}

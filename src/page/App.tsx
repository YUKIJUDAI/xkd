import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../store/index";

// main
import Home from "./home/home";
import College from "./college/college";
import Detail from "./college/detail";
// message
import Message from "./message/message";

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
                    <Route path="/college" exact component={College}></Route>
                    <Route path="/college/detail/:id" component={Detail}></Route>

                    <Route path="/message" component={Message}></Route>

                    <Route path="/login" component={Login}></Route>
                    <Route path="/registered" component={Registered}></Route>
                    <Route path="/forget" component={Forget}></Route>                   
                </HashRouter>
            </Provider>
        );
    }
}

import React, { Component } from "react";
import { render } from "react-dom";
import App from "./containers/app";

//Redux imports
import { Provider } from "react-redux";
import { store } from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';


//ReactDOM.render
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

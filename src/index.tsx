import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store, applyMiddleware } from "redux";
import logger from "redux-logger";
//import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";

import App from "./app";
import IAppState from "./duck/interfaces/IAppState";
import appReducer from "./duck/appReducer";

import "./index.scss";

const store: Store<IAppState> = createStore(
    appReducer,
    applyMiddleware(
        thunkMiddleware,
       // promiseMiddleware(),
        logger // Adding a logger to see what actions are occurring. Leaving comment to fix up for production later.
    )
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"),
);

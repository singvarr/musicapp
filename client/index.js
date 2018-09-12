import React from "react";
import { hydrate } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";

import App from "../shared/components/App";
import reducer from "../shared/state/reducers";

import "../shared/less/index.less";

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const middlewares = [thunk];
const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middlewares)
);

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

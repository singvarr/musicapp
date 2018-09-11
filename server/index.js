import express from "express";
import path from "path";
import cors from "cors";
import "isomorphic-fetch";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import template from "./baseTemplate";
import apiUrl from "./externalApi/itunes";

import { initialState } from "../shared/state/store";
import reducer from "../shared/state/reducers";
import App from "../shared/components/App";

const app = express();
export const router = express.Router();

//Serve static files
app.use(express.static("dist/client"));
app.use(express.static("shared/assets"));

//Ignore favicon request
app.get("/favicon.ico", (req, res) => res.sendStatus(204));

//Fetch for tracks page
app.use("/tracks", (req, res, next) => {
    cors();

    fetch(apiUrl, { mode: "cors" })
        .then(response => response.json())
        .then(data => {
            req.tracks = data.feed.results;
            next();
        })
        .catch(err => {
            next(err);
        });
});

//enable SSR
app.get("*", handleRender);

function handleRender(req, res) {
    const state = req.tracks
        ? {
              trackList: {
                  tracks: req.tracks,
                  hasError: false,
              },
          }
        : initialState;

    const middlewares = [thunk];

    const store = createStore(reducer, state, applyMiddleware(...middlewares));
    const preloadedState = store.getState();
    const context = {};

    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    );

    res.send(template(html, preloadedState));
}

const port = 4000;

app.listen(port, () => `Server is running on port ${port}`);

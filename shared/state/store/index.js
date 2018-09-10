import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "../reducers";

export const initialState = {
    trackList: {
        tracks: [],
        hasError: false,
    },
    isFetching: false,
    tags: [],
};

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;

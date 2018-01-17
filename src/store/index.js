import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducer from "../reducers";
import {loadState, saveState} from "./localStorage";

const initialState = {
	trackList: {
		tracks: loadState(),
		hasError: false,
		tags: []
	},
	isFetching: false,
}

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));

store.subscribe(() => saveState(store.getState().trackList.tracks));

export default store;
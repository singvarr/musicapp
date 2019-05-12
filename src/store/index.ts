import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import tracks from "store/tracks";

export const initialState = { tracks: { data: [], isError: false, isLoading: false } };

export const reducer = combineReducers({ tracks });
export const makeStore = (initialState, reducer) =>
    createStore(reducer, initialState, applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

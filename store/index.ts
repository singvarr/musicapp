import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import tracks from "store/tracks";
import State from "types/state";

const { NODE_ENV } = process.env;

const middlewares = applyMiddleware(thunk);
const enhancer =
    NODE_ENV === "development" ? composeWithDevTools(middlewares) : middlewares;

export const reducer = combineReducers({ tracks });
const makeStore = (initialState: State): Store =>
    createStore(reducer, initialState, enhancer);

export default makeStore;

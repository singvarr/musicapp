import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import tracks from "store/tracks";
import State from "types/state";

export const reducer = combineReducers({ tracks });

const opts = { debug: true };
export const makeStore = (initialState: State, options = opts): Store =>
    createStore(reducer, initialState, applyMiddleware(thunk));

export default makeStore;

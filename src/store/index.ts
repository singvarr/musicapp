import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import tracks from "store/tracks";

const reducer = combineReducers({ tracks });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

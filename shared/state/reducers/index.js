import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { getTopTracks } from "./tracks";
import { requestTracks } from "./fetching";
import filterTracks from "./filter";

const reducer = combineReducers({
    route: routerReducer,
    trackList: getTopTracks,
    isFetching: requestTracks,
    tags: filterTracks,
});

export default reducer;

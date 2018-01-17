import { combineReducers } from "redux";

import { getTopTracks } from "./tracks";
import { requestTracks } from "./fetching";
import filterTracks from "./filter";

const reducer = combineReducers({
	trackList: getTopTracks,
	isFetching: requestTracks,
	tags: filterTracks
});

export default reducer;
import { combineReducers } from "redux";

import { getTopTracks } from "./tracks";
import { requestTracks } from "./fetching";

const reducer = combineReducers({
	trackList: getTopTracks,
	isFetching: requestTracks
});

export default reducer;
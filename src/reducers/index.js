import { combineReducers } from "redux";

import { getTopTracks } from "./tracks";
import { requestTracks } from "./fetching";
import { filterTracksByTags } from "./filter";

const reducer = combineReducers({
	trackList: getTopTracks,
	isFetching: requestTracks,
	tags: filterTracksByTags
});

export default reducer;
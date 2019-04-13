import { combineReducers } from "redux";

import { getTopTracks } from "reducers/tracks";
import { requestTracks } from "reducers/fetching";
import filterTracks from "reducers/filter";

const reducer = combineReducers({
    trackList: getTopTracks,
    isFetching: requestTracks,
    tags: filterTracks
});

export default reducer;

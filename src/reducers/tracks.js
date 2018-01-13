import {
	GET_TOP_TRACKS_SUCCESS,
	GET_TOP_TRACKS_ERROR
} from "../actions";

const initialState = {
	tracks: [],
	errorMessage: ""
};

export function getTopTracks(state = initialState, action) {
	switch(action.type) {
		case GET_TOP_TRACKS_SUCCESS:
			var payload = {tracks: action.payload};
			break;
		case GET_TOP_TRACKS_ERROR: 
			payload = {errorMessage: action.error};
			break;
		default: 
			payload = {};
			break;
	}

	return Object.assign({}, state, payload)
}
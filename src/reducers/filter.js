import { FILTER_TRACKS_BY_TAGS } from "../actions";

export function filterTracksByTags(state = [], action) {
	return action.type == FILTER_TRACKS_BY_TAGS ? [...new Set(state).add(action.tag)] : state;
}
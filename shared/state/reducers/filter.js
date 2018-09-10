import { FILTER_TRACKS_BY_TAGS, DELETE_TAG, DELETE_ALL_TAGS } from "../actions";

function filterTracks(state = [], action) {
    switch (action.type) {
        case FILTER_TRACKS_BY_TAGS:
            return [...new Set(state).add(action.tag)];
        case DELETE_TAG:
            return state.filter(tag => tag != action.tag);
        case DELETE_ALL_TAGS:
            return [];
        default:
            return state;
    }
}

export default filterTracks;

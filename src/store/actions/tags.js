import {
    FILTER_TRACKS_BY_TAGS,
    DELETE_TAG,
    DELETE_ALL_TAGS
} from "constants/tags";

export function filterTracksByTags(tag) {
    return {
        type: FILTER_TRACKS_BY_TAGS,
        tag
    };
}

export function deleteTag(tag) {
    return {
        type: DELETE_TAG,
        tag
    };
}

export function deleteAllTags() {
    return {
        type: DELETE_ALL_TAGS
    };
}

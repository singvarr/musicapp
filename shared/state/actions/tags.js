export const FILTER_TRACKS_BY_TAGS = "FILTER_TRACKS_BY_TAG";
export const DELETE_TAG = "DELETE_TAG";
export const DELETE_ALL_TAGS = "DELETE_ALL_TAGS";

export function filterTracksByTags(tag) {
    return {
        type: FILTER_TRACKS_BY_TAGS,
        tag,
    };
}

export function deleteTag(tag) {
    return {
        type: DELETE_TAG,
        tag,
    };
}

export function deleteAllTags() {
    return {
        type: DELETE_ALL_TAGS,
    };
}

export const FILTER_TRACKS_BY_TAGS = "FILTER_TRACKS_BY_TAG";

export function filterTracksByTags(tag) {
	return {
		type: FILTER_TRACKS_BY_TAGS,
		tag
	}
}
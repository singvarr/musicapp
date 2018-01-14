export const REQUEST_TRACKS = "REQUEST_TRACKS";
export const GET_TOP_TRACKS_SUCCESS = "GET_TOP_TRACKS_SUCCESS";
export const GET_TOP_TRACKS_ERROR = "GET_TOP_TRACKS_ERROR";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const TOP_TRACKS_URL = "https://rss.itunes.apple.com/api/v1/ua/apple-music/top-songs/all/100/explicit.json";

export function requestTracks() {
	return {
		type: REQUEST_TRACKS
	}
}

export const getTopTracks = () => (dispatch, getState) => {
	if(getState().trackList.hasError) dispatch(getTopTracksError());

	dispatch(requestTracks());
	return fetch(PROXY_URL + TOP_TRACKS_URL, {mode: "cors"})
		.then(res => res.json())
		.then(data => data.feed.results)
		.then(tracks => dispatch(getTopTracksSuccess(tracks)))
		.then(() => dispatch(requestTracks()))
		.catch(() => {
			dispatch(requestTracks());
			dispatch(getTopTracksError());
		})
}

export function getTopTracksSuccess(payload) {
	return {
		type: GET_TOP_TRACKS_SUCCESS,
		payload
	}
}

export function getTopTracksError() {
	return {
		type: GET_TOP_TRACKS_ERROR
	}
}
export const REQUEST_TRACKS = "REQUEST_TRACKS";
export const GET_TOP_TRACKS_SUCCESS = "GET_TOP_TRACKS_SUCCESS";
export const GET_TOP_TRACKS_ERROR = "GET_TOP_TRACKS_ERROR";

export function requestTracks() {
    return {
        type: REQUEST_TRACKS,
    };
}

export const getTopTracks = () => (dispatch, getState) => {
    if (getState().trackList.hasError) dispatch(getTopTracksError());

    dispatch(requestTracks());

    return fetch("/tracks")
        .then(res => res.json())
        .then(data => {
            dispatch(requestTracks())
            return data.feed.results
        })
        .then(tracks => dispatch(getTopTracksSuccess(tracks)))
        .catch(() => {
            dispatch(requestTracks());
            dispatch(getTopTracksError());
        });
};

export function getTopTracksSuccess(payload) {
    return {
        type: GET_TOP_TRACKS_SUCCESS,
        payload,
    };
}

export function getTopTracksError() {
    return {
        type: GET_TOP_TRACKS_ERROR,
    };
}

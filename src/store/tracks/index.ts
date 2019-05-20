import axios from "axios";
import { action } from "typesafe-actions";
import { TracksAction, TracksState, GetTracks } from "types/state";
import TrackType from "types/track";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const TOP_TRACKS_URL =
    "https://rss.itunes.apple.com/api/v1/ua/itunes-music/top-songs/all/100/explicit.json";

const GET_TRACKS_LOADING = "GET_TRACKS_LOADING";
const GET_TRACKS_SUCCESS = "GET_TRACKS_SUCCESS";
const GET_TRACKS_ERROR = "GET_TRACKS_ERROR";

export const getTracksLoading = () => action(GET_TRACKS_LOADING);
export const getTracksSuccess = (tracks: TrackType[]) =>
    action(GET_TRACKS_SUCCESS, { tracks });
export const getTracksError = () => action(GET_TRACKS_ERROR);

export const getTracks = (): GetTracks => dispatch => {
    dispatch(getTracksLoading());

    return axios
        .get(`${PROXY_URL}${TOP_TRACKS_URL}`, {
            headers: {
                "X-Requested-With": "localhost"
            }
        })
        .then(data => dispatch(getTracksSuccess(data.data.feed.results)))
        .catch(err => dispatch(getTracksError()));
};

const initialState: TracksState = {
    isError: false,
    isLoading: false,
    data: []
};

function reducer(
    state: TracksState = initialState,
    action: TracksAction
): TracksState {
    switch (action.type) {
        case GET_TRACKS_LOADING:
            return { ...state, isLoading: true };
        case GET_TRACKS_SUCCESS:
            return { ...state, isLoading: false, data: action.payload.tracks };
        case GET_TRACKS_ERROR:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
}

export default reducer;

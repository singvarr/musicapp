import axios from "axios";
import { action } from "typesafe-actions";
import { TracksAction, TracksState, GetTracks } from "types/state";
import TrackType from "types/track";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

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
        .get(`${PROXY_URL}${process.env.API_BASE}`, {
            headers: {
                "X-Requested-With": process.env.HOST
            }
        })
        .then(res => dispatch(getTracksSuccess(res.data.feed.results)))
        .catch(() => dispatch(getTracksError()));
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

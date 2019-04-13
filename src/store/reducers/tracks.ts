import {
    GET_TRACKS_LOADING,
    GET_TRACKS_ERROR,
    GET_TRACKS_SUCCESS
} from "constants/tracks";
import { TracksAction, TracksState } from "types/state";

const initialState: TracksState = {
    isError: false,
    isLoading: false,
    data: []
};

function reducer(state: TracksState = initialState, action: TracksAction) {
    switch (action.type) {
        case GET_TRACKS_LOADING:
            return { ...state, isLoading: true };
        case GET_TRACKS_SUCCESS:
            return { ...state, isLoading: false, data: action.payload.tracks };
        case GET_TRACKS_ERROR:
            return { ...state, isError: true };
        default:
            return state;
    }
}

export default reducer;

import { ThunkAction } from "redux-thunk";
import { action, ActionType } from "typesafe-actions";
import {
    GET_TRACKS_LOADING,
    GET_TRACKS_SUCCESS,
    GET_TRACKS_ERROR
} from "constants/tracks";
import TrackType from "types/track";
import State from "types/state";
import { Action } from "react-redux/node_modules/redux";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const TOP_TRACKS_URL =
    "https://rss.itunes.apple.com/api/v1/ua/itunes-music/top-songs/all/100/explicit.json";

const getTracksLoading = () => action(GET_TRACKS_LOADING);
const getTracksSuccess = (tracks: TrackType[]) =>
    action(GET_TRACKS_SUCCESS, { tracks });
const getTracksError = () => action(GET_TRACKS_ERROR);

export const getTracksActions = {
    getTracksError,
    getTracksLoading,
    getTracksSuccess
};

const getTracks = (): ThunkAction<
    | Promise<ActionType<typeof getTracksSuccess>>
    | Promise<ActionType<typeof getTracksError>>,
    State,
    null,
    Action<string>
> => dispatch => {
    dispatch(getTracksLoading());

    return fetch(`${PROXY_URL}${TOP_TRACKS_URL}`, { mode: "cors" })
        .then((res: Response) => {
            const data: Promise<{
                feed: { results: TrackType[] };
            }> = res.json();
            return data.feed.results;
        })
        .then(tracks => dispatch(getTracksSuccess(tracks)))
        .catch(() => dispatch(getTracksError()));
};

export default getTracks;

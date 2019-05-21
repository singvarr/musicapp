import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { ActionType, StateType } from "typesafe-actions";
import { reducer } from "store/.";
import {
    getTracksSuccess,
    getTracksError,
    getTracksLoading
} from "store/tracks";
import TrackType from "types/track";

export interface FetchStatus {
    isLoading: boolean;
    isError: boolean;
}
type State = StateType<typeof reducer>;

export type TracksAction = ActionType<
    typeof getTracksSuccess | typeof getTracksLoading | typeof getTracksError
>;
export interface TracksState extends FetchStatus {
    data: TrackType[];
}
export type GetTracksResult = Promise<
    ActionType<typeof getTracksSuccess | typeof getTracksError>
>;
export type GetTracks = ThunkAction<
    GetTracksResult,
    State,
    null,
    Action<string>
>;

export default State;

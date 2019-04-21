import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { ActionType, StateType } from "typesafe-actions";
import reducer from "reducers/.";
import {
    getTracksSuccess,
    getTracksError,
    getTracksLoading
} from "actions/tracks";
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
export type GetTracks = ThunkAction<
    Promise<ActionType<typeof getTracksSuccess | typeof getTracksError>>,
    State,
    null,
    Action<string>
>;

export default State;

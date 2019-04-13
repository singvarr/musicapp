import { ActionType, StateType } from "typesafe-actions";
import reducer from "reducers/.";
import { getTracksActions } from "actions/tracks";
import TrackType from "types/track";

export type FetchStatus = {
    isLoading: boolean;
    isError: boolean;
};

export type TracksAction = ActionType<typeof getTracksActions>;
export type TracksState = {
    data: TrackType[];
} & FetchStatus;

type State = StateType<typeof reducer>;

export default State;

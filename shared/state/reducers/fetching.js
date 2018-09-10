import { REQUEST_TRACKS } from "../actions";

export function requestTracks(state = false, action) {
    return action.type == REQUEST_TRACKS ? !state : state;
}

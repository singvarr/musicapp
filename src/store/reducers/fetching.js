import { REQUEST_TRACKS } from "actions/tracks";

export function requestTracks(state = false, action) {
    return action.type == REQUEST_TRACKS ? !state : state;
}

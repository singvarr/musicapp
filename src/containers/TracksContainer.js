import { connect } from "react-redux";
import Tracks from "../components/tracks.jsx";
import { getTopTracks } from "../actions";

function mapStateToProps(state) {
	return {
		tracks: state.trackList.tracks,
		errorMessage: state.trackList.errorMessage,
		isFetching: state.isFetching
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onGetTopTracks: () => dispatch(getTopTracks())
	}
}

const TracksContainer = connect(mapStateToProps, mapDispatchToProps)(Tracks);

export default TracksContainer;
import { connect } from "react-redux";
import TrackList from "../components/trackList.jsx";
import { getTopTracks, filterTracksByTags } from "../actions";
import { getFilteredTracks } from "../filters";
 
function mapStateToProps(state) {
	return {
		tracks: getFilteredTracks(state.trackList.tracks, state.tags),
		hasError: state.trackList.hasError,
		isFetching: state.isFetching
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onGetTopTracks: () => dispatch(getTopTracks()),
		onAddTagInFilter: tag => dispatch(filterTracksByTags(tag))
	}
}

const TrackListContainer = connect(mapStateToProps, mapDispatchToProps)(TrackList);

export default TrackListContainer;
import { connect } from "react-redux";

import Track from "../components/Track.jsx";

function mapStateToProps(state, ownProps) {
	return {
		track: state.trackList.tracks.find(track => track.artistId == ownProps.match.params.id)
	}
}

const TrackContainer = connect(mapStateToProps)(Track);

export default TrackContainer;
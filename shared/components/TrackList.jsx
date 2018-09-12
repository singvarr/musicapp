import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import TagFilter from "./TagFilter";

import { getTopTracks, filterTracksByTags } from "../state/actions";
import { getFilteredTracks } from "../state/filters";

class TrackList extends Component {
    componentDidMount() {
        this.props.onGetTopTracks();
    }

    render() {
        return (
            <section className="tracks">
                <TagFilter />
                {this.props.isFetching ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="tracks-list">
                        {this.props.tracks.map((item, i) => {
                            return (
                                <div className="track" key={i}>
                                    <Link to={`/tracks/${item.artistId}`}>
                                        <div className="track-img">
                                            <img src={item.artworkUrl100} />
                                        </div>
                                    </Link>
                                    <div className="track-info">
                                        <div className="title">
                                            {i + 1}. {item.name}
                                        </div>
                                        <div className="performer">
                                            {item.artistName}
                                        </div>
                                        <ul className="tags">
                                            {item.genres.map((genre, i) => (
                                                <li
                                                    key={i}
                                                    onClick={() =>
                                                        this.props.onAddTagInFilter(
                                                            genre.name
                                                        )
                                                    }
                                                    className="tag"
                                                >
                                                    {genre.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                {this.props.hasError && (
                    <div className="error">
                        Sorry, error occured. Please, try again later
                    </div>
                )}
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        tracks: getFilteredTracks(state.trackList.tracks, state.tags),
        hasError: state.trackList.hasError,
        isFetching: state.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetTopTracks: () => dispatch(getTopTracks()),
        onAddTagInFilter: tag => dispatch(filterTracksByTags(tag)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackList);

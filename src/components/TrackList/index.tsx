import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch, Action } from "redux";

import TagFilter from "components/TagFilter";
import { getTopTracks } from "actions/tracks";
import { filterTracksByTags } from "actions/tags";
import { getFilteredTracks } from "../../filters";
import State from "types/state";
import TrackType from "types/track";

interface TrackListProps {
    isError: boolean;
    isFetching: boolean;
    onAddTagInFilter: (tag: string) => void;
    onGetTopTracks: () => void;
    tracks: TrackType[];
}

function TrackList(props: TrackListProps) {
    return (
        <section className="tracks">
            <div className="search-tracks">
                Look for good music? Explore our top 100!
                <button onClick={props.onGetTopTracks}>Get it!</button>
            </div>
            <TagFilter />
            {props.isFetching ? (
                <div className="loading">Loading...</div>
            ) : !props.isError ? (
                <div className="tracks-list">
                    {props.tracks.map((item, i) => {
                        return (
                            <div className="track" key={i}>
                                <Link to={`tracks/${item.artistId}`}>
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
                                                    props.onAddTagInFilter(
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
            ) : (
                <div className="error">
                    Sorry, error occured. Please, try again later
                </div>
            )}
        </section>
    );
}

function mapStateToProps(state: State) {
    return {
        isError: state.trackList.is,
        isFetching: state.isFetching,
        tracks: getFilteredTracks(state.trackList.tracks, state.tags)
    };
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>, State>) {
    return {
        onGetTopTracks: () => dispatch(getTopTracks()),
        onAddTagInFilter: (tag: string) => dispatch(filterTracksByTags(tag))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackList);

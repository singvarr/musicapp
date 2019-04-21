import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

// import TagFilter from "components/TagFilter";
import { getTracks } from "store/tracks";
import State, { FetchStatus, GetTracks } from "types/state";
import TrackType from "types/track";

interface TrackListProps extends FetchStatus {
    onGetTracks: GetTracks;
    tracks: TrackType[];
}

class TrackList extends Component<TrackListProps> {
    componentDidMount() {
        this.props.onGetTracks();
    }

    render() {
        return (
            <section className="tracks">
                {/* <TagFilter /> */}
                {this.props.isLoading ? (
                    <div className="loading">Loading...</div>
                ) : !this.props.isError ? (
                    <div className="tracks-list">
                        {this.props.tracks.map((item, i) => {
                            return (
                                <div className="track" key={i}>
                                    <Link to={`tracks/${item.artistId}`}>
                                        <div className="track-img">
                                            <img src={item.artworkUrl100} />
                                        </div>
                                    </Link>
                                    <div className="track-info">
                                        <div className="title">
                                            {`${++i}. ${item.name}`}
                                        </div>
                                        <div className="performer">
                                            {item.artistName}
                                        </div>
                                        <ul className="tags">
                                            {item.genres.map((genre, i) => (
                                                <li
                                                    key={i}
                                                    // onClick={() =>
                                                    //     this.props.onAddTagInFilter(
                                                    //         genre.name
                                                    //     )
                                                    // }
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
}

function mapStateToProps(state: State) {
    const { isError, isLoading, data } = state.tracks;
    return {
        isError,
        isLoading,
        tracks: data
    };
}

function mapDispatchToProps(
    dispatch: ThunkDispatch<State, null, Action<string>>
) {
    return {
        onGetTracks: () => dispatch(getTracks())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackList);

import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import TrackType from "types/track";
import State from "types/state";

interface TrackProps extends RouteComponentProps<{ id: string }> {
    track: TrackType;
}

function Track(props: TrackProps): JSX.Element {
    return (
        <section className="track-page">
            <div className="track-img">
                <img alt={props.track.name} src={props.track.artworkUrl100}  />
            </div>
            <div className="track-info">
                <div className="title">Title: {props.track.name}</div>
                <div className="performer">
                    Performer: {props.track.artistName}
                </div>
                <div className="album">Album: {props.track.collectionName}</div>
                <div className="release">
                    Release date: {props.track.releaseDate}
                </div>
                <div className="tags">
                    Tags:
                    {props.track.genres.map(
                        (genre): JSX.Element => {
                            return <div key={genre.name}>{genre.name}</div>;
                        }
                    )}
                </div>
            </div>
        </section>
    );
}

function mapStateToProps(
    state: State,
    ownProps: TrackProps
): { track: TrackType } {
    return {
        track: state.tracks.data.find(
            (track: TrackType): boolean =>
                track.artistId == ownProps.match.params.id
        )
    };
}
export default connect(mapStateToProps)(Track);

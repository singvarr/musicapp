import React from "react";
import { connect } from "react-redux";

function Track(props) {
    return (
        <section className="track-page">
            <div className="track-img">
                <img src={props.track.artworkUrl100} alt={props.track.name} />
            </div>
            <div className="track-info">
                <div className="title">Tilte: {props.track.name}</div>
                <div className="performer">
                    Performer: {props.track.artistName}
                </div>
                <div className="album">Album: {props.track.collectionName}</div>
                <div className="release">
                    Release date: {props.track.releaseDate}
                </div>
                <div className="tags">
                    Tags:{" "}
                    {props.track.genres.map(genre => {
                        return <div key={genre.name}>{genre.name}</div>;
                    })}
                </div>
            </div>
        </section>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        track: state.trackList.tracks.find(
            track => track.artistId === ownProps.match.params.id
        ),
    };
}

export default connect(mapStateToProps)(Track);

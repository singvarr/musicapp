import React from "react";
import { Link } from "react-router-dom";
import injectSheet, { WithSheet, StyleCreator } from "react-jss";
import TrackType from "types/track";
import Theme from "types/theme";
import styles from "./styles";

interface TrackCardProps
    extends TrackType, WithSheet<StyleCreator<string, Theme>> {
    position: number;
}

function TrackCard(props: TrackCardProps): JSX.Element {
    const { classes } = props;

    return (
        <div className={classes.track}>
            <Link className={classes.link} to={`tracks/${props.artistId}`}>
                <div className={classes.imageContainer}>
                    <img className={classes.image} src={props.artworkUrl100} />
                </div>
            </Link>
            <div>
                <div className={classes.title}>
                    {`${props.position}. ${props.name}`}
                </div>
                <div className={classes.performer}>{props.artistName}</div>
                <ul className={classes.genres}>
                    {props.genres.map(
                        (genre): JSX.Element => (
                            <li className={classes.genre} key={genre.name}>
                                {genre.name}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}

export default injectSheet(styles)(TrackCard);

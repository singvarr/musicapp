import React from "react";
import Link from "next/link";
import withStyles, { WithStyles } from "react-jss";
import TrackType from "types/track";
import styles from "./styles";

interface TrackCardProps extends TrackType, WithStyles<typeof styles> {
    position: number;
}

function TrackCard(props: TrackCardProps): JSX.Element {
    const { classes } = props;

    return (
        <div className={classes.track}>
            <Link href={`tracks/${props.artistId}`}>
                <a className={classes.link}>
                    <div className={classes.imageContainer}>
                        <img
                            className={classes.image}
                            src={props.artworkUrl100}
                        />
                    </div>
                </a>
            </Link>
            <div>
                <div className={classes.title}>
                    {`${props.position}. ${props.name}`}
                </div>
                <div className={classes.performer}>{props.artistName}</div>
                <ul className={classes.genres}>
                    {props.genres.map(
                        (genre, i): JSX.Element => (
                            <li className={classes.genre} key={i}>
                                {genre.name}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}

export default withStyles(styles)(TrackCard);

import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { FormattedMessage } from "react-intl";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import injectSheet, { WithSheet, StyleCreator } from "react-jss";
import classnames from "classnames";

import TrackCard from "components/TrackCard";
import { getTracks } from "store/tracks";
import State, { FetchStatus, GetTracksResult, TracksState } from "types/state";
import TrackType from "types/track";
import Theme from "types/theme";
import styles from "./styles";

interface TopTracksProps
    extends FetchStatus,
    WithSheet<StyleCreator<string, Theme>> {
    onGetTracks: () => GetTracksResult;
    data: TrackType[];
}

class TopTracks extends Component<TopTracksProps> {
    public static getInitialProps(context): Promise<GetTracksResult> {
        const { store } = context;
        return store.dispatch(getTracks());
    }

    public render(): JSX.Element {
        const { classes, isError, isLoading, data } = this.props;

        if (isError) {
            return (
                <div
                    className={classnames(
                        classes.statusMessage,
                        classes.errorMessage
                    )}
                >
                    <FormattedMessage id="search.error" />
                </div>
            );
        } else if (isLoading) {
            return (
                <div className={classes.statusMessage}>
                    <FormattedMessage id="search.loading" />
                </div>
            );
        }

        return (
            <section>
                <div className={classes.trackList}>
                    {data.map(
                        (item, i): JSX.Element => {
                            return (
                                <TrackCard
                                    key={item.name}
                                    position={++i}
                                    {...item}
                                />
                            );
                        }
                    )}
                </div>
            </section>
        );
    }
}

function mapStateToProps(state: State): TracksState {
    const { isError, isLoading, data } = state.tracks;
    return {
        isError,
        isLoading,
        data
    };
}

export default compose(
    connect(mapStateToProps),
    injectSheet(styles)
)(TopTracks);

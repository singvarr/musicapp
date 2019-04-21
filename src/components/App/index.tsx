import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import injectSheet, { WithSheet, StyleCreator } from "react-jss";

import Home from "pages/Home";
import TopTracks from "pages/TopTracks";
import TrackPage from "pages/TrackPage";
import Header from "components/Header";
import Theme from "types/theme";
import styles from "./styles";

function App(props: WithSheet<StyleCreator<string, Theme>>): JSX.Element {
    const { classes } = props;

    return (
        <Fragment>
            <Header />
            <main className={classes.main}>
                <Switch>
                    <Route component={Home} exact path="/" />
                    <Route component={TopTracks} exact path="/tracks" />
                    <Route component={TrackPage} path="/tracks/:id" />
                </Switch>
            </main>
        </Fragment>
    );
}

export default injectSheet(styles)(App);

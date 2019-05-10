import React, { Fragment } from "react";
import injectSheet from "react-jss";
import Header from "components/Header";
import styles from "./styles";

function MainLayout(props): JSX.Element {
    const { children, classes } = props;
    return (
        <Fragment>
            <Header />
            <main className={classes.main}>{children}</main>
        </Fragment>
    );
}

export default injectSheet(styles)(MainLayout);

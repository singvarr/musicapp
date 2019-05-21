import React, { Fragment } from "react";
import withStyles, { WithStyles } from "react-jss";
import Header from "components/Header";
import styles from "./styles";

interface MainLayoutInterface extends WithStyles<typeof styles> {
    children: JSX.Element;
}

function MainLayout(props: MainLayoutInterface): JSX.Element {
    const { children, classes } = props;

    return (
        <Fragment>
            <Header />
            <main className={classes.main}>{children}</main>
        </Fragment>
    );
}

export default withStyles(styles)(MainLayout);

import React, { Fragment } from "react";
import injectSheet, { WithStyles } from "react-jss";
import Header from "components/Header";
import styles from "./styles";

interface MainLayoutInterface extends WithStyles<any> {
    children: Element;
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

export default injectSheet(styles)(MainLayout);

import React from "react";
import { FormattedMessage } from "react-intl";
import injectSheet, { WithSheet, StyleCreator } from "react-jss";
import Navigation from "components/Navigation";
import styles from "./styles";
import Theme from "types/theme";

function Header(props: WithSheet<StyleCreator<string, Theme>>): JSX.Element {
    const { classes } = props;

    return (
        <header className={classes.wrapper}>
            <div className={classes.logoWrapper}>
                <img
                    alt="logo"
                    className={classes.logo}
                    src="/static/img/logo.png"
                />
                <FormattedMessage id="header.title" />
            </div>
            <Navigation />
            <a
                className={classes.donateLink}
                href="https://www.liqpay.ua/ru/checkout/mynewtestradio"
                rel="noopener noreferrer"
                target="_blank"
            >
                <FormattedMessage id="header.donate" />
            </a>
        </header>
    );
}

export default injectSheet(styles)(Header);

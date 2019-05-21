import React from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import withStyles, { WithStyles } from "react-jss";
import Navigation from "components/Navigation";
import styles from "./styles";

function Header(props: WithStyles<typeof styles>): JSX.Element {
    const { classes } = props;

    return (
        <header className={classes.wrapper}>
            <Link href="/">
                <a className={classes.logoWrapper}>
                    <img
                        alt="logo"
                        className={classes.logo}
                        src="/static/img/logo.png"
                    />
                    <FormattedMessage id="header.title" />
                </a>
            </Link>
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

export default withStyles(styles)(Header);

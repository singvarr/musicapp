import React from "react";
import Link from "next/link";
import injectSheet, { WithSheet, StyleCreator } from "react-jss";
import menu from "fixtures/navigation";
import styles from "./styles";
import { FormattedMessage } from "react-intl";

function Navigation(props): JSX.Element {
    const { classes } = props;

    return (
        <nav className="navigation">
            <ul className={classes.list}>
                {menu.map(
                    (link): JSX.Element => (
                        <li className={classes.listItem} key={link.linkTo}>
                            <Link href={link.linkTo}>
                                <a className={classes.link}>
                                    <FormattedMessage id={link.name} />
                                </a>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}

export default injectSheet(styles)(Navigation);

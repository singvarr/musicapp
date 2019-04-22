import React from "react";
import { NavLink } from "react-router-dom";
import injectSheet, { WithSheet, StyleCreator } from "react-jss";
import menu from "fixtures/navigation";
import Theme from "types/theme";
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
                            <NavLink
                                activeClassName={classes.link.active}
                                className={classes.link}
                                exact={link.exact}
                                to={link.linkTo}
                            >
                                <FormattedMessage id={link.name} />
                            </NavLink>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}

export default injectSheet(styles)(Navigation);

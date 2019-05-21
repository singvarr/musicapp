import React from "react";
import Link from "next/link";
import { withRouter, WithRouterProps } from "next/router";
import withStyles, { WithStyles } from "react-jss";
import { compose } from "recompose";
import { FormattedMessage } from "react-intl";
import classnames from "classnames";
import menu from "fixtures/navigation";
import styles from "./styles";

type NavigationProps = WithStyles<typeof styles> & WithRouterProps;

function Navigation(props: NavigationProps): JSX.Element {
    const { classes } = props;

    return (
        <nav className={classes.navigation}>
            <ul className={classes.list}>
                {menu.map(
                    (link): JSX.Element => {
                        const { linkTo, name } = link;
                        let isActive = props.router.asPath === linkTo;

                        return (
                            <li className={classes.listItem} key={link.linkTo}>
                                <Link href={linkTo}>
                                    <a
                                        className={classnames(
                                            classes.link,
                                            isActive && classes.activeLink
                                        )}
                                    >
                                        <FormattedMessage id={name} />
                                    </a>
                                </Link>
                            </li>
                        );
                    }
                )}
            </ul>
        </nav>
    );
}

export default compose(
    withRouter,
    withStyles(styles)
)(Navigation);

import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Main
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tracks">Tracks</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;

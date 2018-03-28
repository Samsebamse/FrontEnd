import React from "react";
import { NavLink } from "react-router-dom";


export const Nav = (props) => {
    return(
        <ul>
            <li>
                <NavLink activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/add">Add</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/subtract">Subtract</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/reset">Reset</NavLink>
            </li>
        </ul>
    );
}

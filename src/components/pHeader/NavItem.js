import React from 'react';
import { Link } from "react-router-dom";

const NavItem = ({icon, label, href}) => (
    <li className="header-nav-item mar-h-20">
        <Link className="c-white w-bold d-flex a-vertical fdir-column" to={href}>
            <i className={`fas fa-${icon} s-22`}/>
            <span className="mar-t-4">{label}</span>
        </Link>
    </li>
)

export default NavItem;
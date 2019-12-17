import React from 'react';

const NavItem = ({icon, label, href}) => (
    <li className="header-nav-item mar-h-20">
        <a className="c-white w-bold d-flex a-vertical fdir-column" href={href}>
            <i className={`fas fa-${icon} s-22`}/>
            <span className="mar-t-4">{label}</span>
        </a>
    </li>
)

export default NavItem;
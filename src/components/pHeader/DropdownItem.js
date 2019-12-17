import React from 'react';
import { Link } from "react-router-dom";

const DropdownItem = ({label, to, icon, onClick}) => (
    <Link onClick={onClick} to={to} className='dropdown-item cw-100 c-white d-flex a-vertical'>
        { icon ? <i className={`fas fa-${icon} mar-l-14 s-22`}/> : null }
        <span className="s-16 mar-l-14">{label}</span>
    </Link>
)

export default DropdownItem;
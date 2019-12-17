import React from 'react';
import { Link } from "react-router-dom";

const SelectionItem = ({label, id, selected}) => (
    <Link to={id} className={`selection-item clickable br-medium d-flex a-center mar-r-12 s-14 ${selected(id) ? "active c-white" : "sd-heavy c-black" }`}>
        {label}
    </Link>
)

export default SelectionItem;
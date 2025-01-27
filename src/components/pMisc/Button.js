import React from 'react';

const Button = ({onClick, label, icon, color, className}) => (
    <span onClick={onClick} className={`bg-${color} ${className} no-select br-low pad-10 clickable`}>
        <i className={`fas fa-${icon} mar-l-2 mar-r-8 c-white`}/>
        <span className="c-white">{label}</span>
    </span>
)

export default Button;
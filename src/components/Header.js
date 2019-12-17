import React from 'react';

//Partial Components
import NavItem from './pHeader/NavItem'

//Assets
import Logo from "../assets/logo.png"

const Header = () => (
    <header className="main-header d-flex a-vertical cw-fill a-between">
        <img className="main-logo" alt="" src={Logo}/>
        <ul className="main-nav d-flex">
            <NavItem href="#" icon="th" label="Módulos"/>
            <NavItem href="#" icon="sign-out-alt" label="Log Out"/>
        </ul>
    </header>
)

export default Header;
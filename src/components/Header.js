import React, { Fragment, useState } from 'react';

//Partial Components
import NavItem from './pHeader/NavItem'
import DropdownItem from './pHeader/DropdownItem'

//Assets
import Logo from "../assets/logo.png"

const Header = () => {
    const [dropActive, setDrop] = useState(false)
    return (
        <Fragment>
            <header className="main-header bg-blue d-flex a-vertical cw-fill a-between">
                <img className="main-logo" alt="Prefeitura Boa Vista" src={Logo}/>
                <ul className="main-nav d-flex">
                    <NavItem href="#" icon="th" label="Módulos"/>
                    <NavItem href="#" icon="sign-out-alt" label="Log Out"/>
                    <i onClick={() => setDrop(!dropActive)} className="head-menu-btn fas fa-bars clickable s-28 d-flex a-vertical c-white"/>
                </ul>
            </header>
            <div className={`dropdown-menu d-flex fdir-column overflow-hide bg-blue cw-100 ${dropActive ? "active" : "inactive"}`}>
                <DropdownItem onClick={() => setDrop(!dropActive)} label="Home" to="home"/>
                <DropdownItem onClick={() => setDrop(!dropActive)} label="FAQ" to="faq"/>
                <DropdownItem onClick={() => setDrop(!dropActive)} label="Locais" to="locais"/>
                <DropdownItem onClick={() => setDrop(!dropActive)} label="Categorias" to="categorias"/>
                <DropdownItem onClick={() => setDrop(!dropActive)} label="Módulos" to="#" icon="th"/>
                <DropdownItem onClick={() => setDrop(!dropActive)} label="Log Out" to="#" icon="sign-out-alt"/>
            </div>
        </Fragment>
    )
}

export default Header;
import React from 'react';
import Logo from '../assets/images/logo.png'

const Navbar = ()=>{
    return (
        <nav className="navbar navbar-light bg-blue px-30 py-4p">
            <span className="navbar-brand px-0 py-0">
               <img src={Logo} width={155}/>
            </span>
        </nav>
    );
};
export default Navbar;
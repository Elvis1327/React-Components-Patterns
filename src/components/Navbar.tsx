import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../routes/routes';
import logo from '../logo.svg';

const Navbar = () => {
    return (
        <nav>
                    <img src={logo} alt="logo-pic" />
                    <ul>
                        {routes.map(route => (
                            <li key={route.to}>
                                <NavLink 
                                    to={route.to} 
                                    className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                        {route.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
    )
}

export default Navbar

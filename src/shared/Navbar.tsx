import React from 'react'
import { NavLink } from 'react-router-dom';

import logo from '../logo.svg';

export const Navbar = () => {
    return (
        <div>
            <nav>
                    <img src={logo} alt="logo-pic" />
                    <ul>
                        <li>
                            <NavLink
                                to="/register" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    Register
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-basic" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    Formik Basic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-yup" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    Formik Yup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-components" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    Formik Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-abstractation" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    Formik Abstractation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/register-formik-page" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    Register Formik Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/dynamic-form" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    Dynamic Form
                            </NavLink>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}

import React from 'react';
import { 
    Routes, 
    Route, 
    Link, 
    BrowserRouter, 
    NavLink,
    Navigate
} from 'react-router-dom';

import logo from '../02-ocmponent-patterns/assets/logo.svg';
import ShoopingPage from '../02-ocmponent-patterns/pages/ShoopingPage';

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo-pic" />
                    <ul>
                        <li>
                            <NavLink 
                                to="/" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    Shoopping
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/users" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1>About</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/" element={<ShoopingPage />} />

                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
;

export default Navigation

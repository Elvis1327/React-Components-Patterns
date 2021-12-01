import React from 'react';
import { 
    Routes, 
    Route,
    BrowserRouter, 
    NavLink,
    Navigate
} from 'react-router-dom';

import logo from '../logo.svg';
import { LazyPage1, LazyPage3, LazyPage2 } from '../01-lazyload/pages/index';

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo-pic" />
                    <ul>
                        <li>
                            <NavLink 
                                to="/lazy1" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    LazyPage1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/lazy2" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    LazyPage2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/lazy3" 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''  }>
                                    LazyPage3
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<LazyPage1 />} />
                    <Route path="lazy2" element={<LazyPage2 />} />
                    <Route path="lazy3" element={<LazyPage3 />} />

                    <Route path="/*" element={<Navigate to="/lazy1" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
;

export default Navigation

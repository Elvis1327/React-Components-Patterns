import React, { Suspense } from 'react';
import { 
    Routes, 
    Route,
    BrowserRouter, 
    Navigate,
} from 'react-router-dom';

import { routes } from './routes';
import Navbar from '../components/Navbar';
import '../index.css'

const Navigation = () => {
    return (
        <Suspense fallback={<div className="loading"></div>}>
            <BrowserRouter>
                <div className="main-layout">
                    <Navbar />
                    <Routes>
                        {routes.map(({Component: Mio, path, to}) => (
                            <Route key={to} path={path} element={<Mio />} />
                        ))}
                        <Route path="/*" element={<Navigate to={ routes[0].to } replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
;


export default Navigation

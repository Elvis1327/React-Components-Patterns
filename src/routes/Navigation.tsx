import React from 'react';
import { 
    Routes, 
    Route, 
    BrowserRouter, 
    Navigate
} from 'react-router-dom';

import { 
    RegisterPage, 
    FormikAbstractation, 
    FormikBasicPage, 
    FormikYupPage, 
    FormikComponents, 
    RegisterFormikPage,
    DynamicForm
    } from '../03-forms/pages';
import { Navbar } from '../shared/Navbar';

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <Navbar />

                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/formik-basic" element={<FormikBasicPage />} />
                    <Route path="/formik-yup" element={<FormikYupPage />} />
                    <Route path="/formik-components" element={<FormikComponents />} />
                    <Route path="/formik-abstractation" element={<FormikAbstractation />} />
                    <Route path="/register-formik-page" element={<RegisterFormikPage />} />
                    <Route path="/dynamic-form" element={<DynamicForm />} />

                    <Route path="/" element={<Navigate to="/register" />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
;

export default Navigation

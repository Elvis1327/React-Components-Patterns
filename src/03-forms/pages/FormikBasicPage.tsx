import React from 'react';
import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface formValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (value) => {
            console.log(value)
        },
        validate: ({firstName, lastName, email}) => {
            let error: FormikErrors<formValues> = {};
            if(!firstName){
                error.firstName = 'firstName is required'
            }else if(firstName.length <=5){
                error.firstName = 'firstName needs to be more than 5 letters'
            };

            if(!lastName){
                error.lastName = 'firstName is required';
            }else if(lastName.length <=5){
                error.lastName = 'firstName needs to be more than 5 letters'
            };

            if(!email) {
                error.email = 'Required';
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                error.email = 'Invalid email address';
            };

            return error;
        }
    });

    return (
        <div>
            <h1>Formik basic Tutorial</h1>

            <form onSubmit={handleSubmit}>

                <label>First Name</label>
                <input 
                    type="text" 
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                />
                { errors?.firstName && touched.firstName && <span> {errors?.firstName} </span> }

                <label>Last Name</label>
                <input 
                    type="text" 
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                />
                { errors?.lastName && touched.lastName && <span> {errors?.lastName} </span> }


                <label>Email Adress</label>
                <input 
                    type="email" 
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                { errors?.email && touched.email && <span> {errors?.email} </span> }

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    )
}

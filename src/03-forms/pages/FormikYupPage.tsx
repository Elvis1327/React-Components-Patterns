import React from 'react';
import { useFormik } from 'formik';
import { object, string, } from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

    const { errors, touched, getFieldProps, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (value) => {
            console.log(value)
        },
        validationSchema: object({
            firstName: string()
                            .max(15, 'Needs to have 15 or less letters')
                            .required('Required'),
            lastName: string()
                        .max(15, 'Needs to have 15 or less letters')
                        .required('Required'),
            email: string()
                        .email('Need to have valid letters for email')
                        .required('Required')
        })
    });

    return (
        <div>
            <h1>Formik Yup</h1>

            <form onSubmit={handleSubmit}>

                <label>First Name</label>
                <input 
                    type="text" 
                    {...getFieldProps('firstName')}
                />
                { errors?.firstName && touched.firstName && <span> {errors?.firstName} </span> }

                <label>Last Name</label>
                <input 
                    type="text" 
                    {...getFieldProps('lastName')}
                />
                { errors?.lastName && touched.lastName && <span> {errors?.lastName} </span> }


                <label>Email Adress</label>
                <input 
                    type="email" 
                    {...getFieldProps('email')}
                />
                { errors?.email && touched.email && <span> {errors?.email} </span> }

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    )
}

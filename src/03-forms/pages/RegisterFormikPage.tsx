import React from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <hr />

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                                    .max(15, 'Need to have 15 or less letters')
                                    .required('Required'),
                    email: Yup.string()
                                .email('Need to have valid letters for email')
                                .required('Required'),
                    password1: Yup.string()
                                    .min(6, 'Minimum 6 letters')
                                    .required('Required'),
                    password2: Yup.string()
                                    .required('Required')
                                    .oneOf([ Yup.ref('password1')], 'Password need to be the same'),
                    terms: Yup.boolean()
                                .oneOf([true], 'Need to accept the conditions')
                                .required('Required'),
                    jobType: Yup.string()
                                .notOneOf([ 'Cyber Security', 'Developer' ], 'This is for experimental people')
                                .required('Required')
            })}
            >
                {({handleReset}) => (
                    <Form>

                        <label>Name</label>
                        <Field 
                            type="text"
                            name="name"
                            placeholder='Name'
                        />
                        <ErrorMessage name="name" component="span" />

                        <label>Email</label>
                        <Field 
                            type="text"
                            name="email"
                            placeholder='Email'
                        />
                        <ErrorMessage name="email" component="span" />

                        <label>Password</label>
                        <Field 
                            type="password"
                            name="password1"
                            placeholder='Password'
                        />
                        <ErrorMessage name="password1" component="span" />

                        <label>Repeat Password</label>
                        <Field 
                            type="password"
                            name="password2"
                            placeholder='Repeat Password'
                        />
                        <ErrorMessage name="password2" component="span" />

                        <button type="submit" onClick={handleReset}>
                            Submit
                        </button>

                    </Form>
                )}
            </Formik>

        </div>
    )
}

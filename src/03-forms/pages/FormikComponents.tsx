import React from 'react';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: 'Elvis',
                    lastName: 'testing',
                    email: 'test1@gmail.com',
                    terms: false,
                    jobType: '',
                    hola: true
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Need to have 15 or less letters')
                                        .required('Required'),
                        lastName: Yup.string()
                                    .max(15, 'Need to have 15 or less letters')
                                    .required('Required'),
                        email: Yup.string()
                                    .email('Need to have valid letters for email')
                                    .required('Required'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Need to accept the conditions')
                                    .required('Required'),
                        jobType: Yup.string()
                                    .notOneOf([ 'Cyber Security' ], 'This is for experimental people')
                                    .required('Required')
                })}
            >
                {(values) => (
                        <Form>
                            <label>First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component={"span"} />

                            <label>Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" />

                            <label>Email Adress</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name="email" />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <label >Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick Something</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Cyber Security">Cyber Security</option>
                                <option value="Junior">Junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />


                            <button type="submit">
                                Submit
                            </button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}

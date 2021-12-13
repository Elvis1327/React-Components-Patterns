import React from 'react';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyCheckBox, MySelect, MyTextInput } from '../components/index';

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

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
                            <MyTextInput 
                                label="firstName" 
                                name="firstName" 
                                placeholder='Name'
                            />
                            <MyTextInput 
                                label="lastName" 
                                name="lastName" 
                                placeholder='lastName'
                            />
                            <MyTextInput 
                                label="Email Address" 
                                name="email" 
                                placeholder='Email'
                                type='email'
                            />
                            <MyCheckBox label="Terms and Conditions" name={'terms'} />

                            <MySelect label='Job Type' name="jobType">
                                <option value="">Pick Something</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Cyber Security">Cyber Security</option>
                                <option value="Junior">Junior</option>
                            </MySelect>

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

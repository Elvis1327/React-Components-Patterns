import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import dataJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

export const DynamicForm = () => {

    const initialValues: { [key: string]: any } = {};
    const requiredFields: { [key: string]: any } = {};

    for(const input of dataJson){
        initialValues[input.name] = input.value;

        if(!input.validations) continue;

        let schema = Yup.string()

        for(const rule of input.validations){
            if(rule.type === 'required'){
                schema = schema.required('This is required');
            }
            if(rule.type === 'minLength'){
                schema = schema.min((rule as any).value, 'The minimum letter is 5')
            }
        }

        requiredFields[input.name] = schema;
    }

    const validationSchema = Yup.object({...requiredFields})

    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validationSchema}
            >
                {(values) => (

                    <Form>
                        {dataJson.map( ({type, name, placeholder, label, options}) => {

                            if(type === 'input' || type === 'password' || type === "email" ){
                                return <MyTextInput 
                                        type={(type as any)} 
                                        name={name} 
                                        label={label} 
                                        key={name}
                                        placeholder={placeholder}
                                        />
                            }else if(type === "select"){
                                return (
                                    <MySelect name='jobType' label={label} key={name}>
                                        <option value="">Select an option</option>
                                        {options?.map(option => (
                                            <option key={option.id} value={option.id}>{option.label}</option>
                                        ))}
                                    </MySelect>
                                )
                            }
                            throw new Error(`The type ${type} is not soported`)
                        })}
                        <button type="submit">
                            Submit
                        </button>
                    </Form>

                )}
            </Formik>

        </div>
    )
}

import React, { FormEvent } from 'react';

import { useForm } from '../hooks/useForm';

import '../styles/styles.css'

export const RegisterPage = () => {

    const { onChange, resetForm, password2, email, password1, name, isValidEmail  } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Register Page</h1>


            <form onSubmit={handleOnSubmit}>
                <input 
                    type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                    name="name"
                    className={name.trim().length <= 0 ? 'has-error' : ''}
                    autoComplete="off"
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    name="email"
                    autoComplete="off"
                />
                { !isValidEmail(email) && <span>Email is not valid</span> }

                <input 
                    type="password" 
                    placeholder="Password"
                    value={password1}
                    onChange={onChange}
                    name="password1"
                    autoComplete="off"
                />
                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length < 5 && password1.trim().length > 0 && <span>La password debe tener mas de 5 caracteres</span> }

                <input 
                    type="password" 
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={onChange}
                    name="password2"
                    autoComplete="off"
                />
                { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password2.trim().length > 0 && password2 !== password1 && <span>Las password deben ser iguales</span> }

                <button type="submit">
                    Create
                </button>
                
                <button onClick={resetForm}> 
                    Reset Form
                </button>

            </form>

        </div>
    )
}

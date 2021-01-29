import React, { useState } from 'react';
import '../Register/Form.css';
import useForm from  './useForm';
import validate from './validateInfo';

const LoginForm = ({submitForm}) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );
    return (
        <div className='form-container'>
            <div className='form-content-right'>
                <h4 id='form-title'> Log in to WePlant</h4>
                <form onSubmit={handleSubmit} className='form' noValidate>
                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <button className='form-input-btn' type='submit'>
                        Log in
                    </button>
                    <h4>sign in button</h4>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
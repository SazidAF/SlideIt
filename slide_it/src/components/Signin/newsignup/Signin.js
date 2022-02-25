import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import ForgotPass from './ForgotPass';
import { Link } from "react-router-dom";

export const Signin = () => {
   const validate = Yup.object({  
    firstName: Yup.string()
    .min(3, 'Must be 15 characters or less')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password does not match')
      .required('Confirm password is required'),
    })
  
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Welcome Back!</h1>
          <p className="lead">Sign in to continue</p>
          <Form>
            
            <TextField label="Email or username" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            
          
            
            <div className="col-6">
            <button className="btn btn-success mt-3" type="submit">Sign in</button> 
                                            <div className="forgot-password text-end">
                                                <Link to="/forgot-password">Forgot password?</Link>
                                            </div>
                                        </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Signin
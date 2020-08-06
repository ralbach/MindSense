import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, withFormik} from 'formik';
import * as Yup from 'yup';
// import firebase from 'firebase';

import './componentStyles/Signup.css';
import NavBar from './NavBar';

class Signup extends React.Component{

  render(){
    return(
      <div className="container">
      <NavBar />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required('First name is required.'),
          lastName: Yup.string()
            .required('Last name is required.'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required.'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          confirmPassword:  Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        })}>

         {({ errors, status, touched }) => (
          <Form>
            <h1>Start your mental health journey today!</h1>

            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <br />
              <Field name="firstName" type="text"
                className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
              <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <br />
                <Field name="lastName" type="text"
                  className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <br />
                <Field name="email" type="text"
                  className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <br />
                <Field name="password" type="password"
                  className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <br />
                <Field name="confirmPassword" type="password"
                  className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
                <button variant="outline-primary" type="submit"  id="submitRegistration">Sign up</button>
            </div>

            <Link to="/Login"><div id="login">Already have an account? Login instead!</div></Link>
        </Form>
        )}
        </Formik>
      </div>
    );
  }
}

export default Signup;
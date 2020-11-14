import React, { Component } from 'react';
import { Formik, useField, Form } from 'formik';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import './Login.css';

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    );
};
class Login extends Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
    }
    toggleClassActive = () => {
        this.container.current.classList.add('right-panel-active');
    };

    toggleClassInactive = () => {
        this.container.current.classList.remove('right-panel-active');
    };

    render() {
        return (
            <div
                className='container-forms'
                id='container'
                ref={this.container}
            >
                <div className='form-container sign-in-container'>
                    <Formik
                        initialValues={{
                            name: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .min(3, 'Must be at least 3 characters long')
                                .max(15, 'Must not exceed 15 characters')
                                .required('Required'),
                            password: Yup.string().required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                axios
                                    .post(
                                        'http://localhost:5000/api/authenticate'
                                    )
                                    .then((res) => {
                                        if (res.data.isSuccessful === true) {
                                            alert(
                                                JSON.stringify(values, null, 2)
                                            );
                                            resetForm();
                                            setSubmitting(false);

                                            this.props.history.push('/chat');
                                        } else {
                                            resetForm();
                                            alert(
                                                'Error Message: ' +
                                                    res.data.errorMessage
                                            );
                                        }
                                    });
                                // TODO: ESTABLISH DB CONNECTION
                            }, 3000);
                        }}
                    >
                        {(props) => (
                            <Form className='login-form'>
                                <h1>Login to begin chatting</h1>
                                <CustomTextInput
                                    label='Username'
                                    name='name'
                                    type='text'
                                    placeholder='Enter Username'
                                />
                                <CustomTextInput
                                    label='Password'
                                    name='password'
                                    type='password'
                                    placeholder='Enter Password'
                                />
                                <button type='submit'>
                                    {props.isSubmitting
                                        ? 'Loading...'
                                        : 'Submit'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='form-container sign-up-container'>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .min(3, 'Must be at least 3 characters long')
                                .max(15, 'Must not exceed 15 characters')
                                .required('Required'),
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),
                            password: Yup.string().required('Required'),
                            confirmPassword: Yup.string()
                                .oneOf(
                                    [Yup.ref('password'), ''],
                                    'Passwords must match'
                                )
                                .required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                // TODO: SEND POST REQUEST API
                                axios
                                    .post(
                                        'https://jsonplaceholder.typicode.com/users',
                                        values,
                                        null,
                                        2
                                    )
                                    .then((res) => {
                                        console.log(res);
                                        console.log(res.data);
                                    });
                                //alert(JSON.stringify(values, null, 2));
                                resetForm();
                                setSubmitting(false);

                                this.props.history.push('/chat');
                            }, 3000);
                        }}
                    >
                        {(props) => (
                            <Form className='register-form'>
                                <h1>Create an account.</h1>
                                <CustomTextInput
                                    label='Username'
                                    name='name'
                                    type='text'
                                    placeholder='New Username'
                                />
                                <CustomTextInput
                                    label='Email'
                                    name='email'
                                    type='email'
                                    placeholder='New Email'
                                />
                                <CustomTextInput
                                    label='Password'
                                    name='password'
                                    type='password'
                                    placeholder='Enter Password'
                                />
                                <CustomTextInput
                                    label='Confirm Password'
                                    name='confirmPassword'
                                    type='password'
                                    placeholder='Confirm Password'
                                />
                                <button type='submit'>
                                    {props.isSubmitting
                                        ? 'Loading...'
                                        : 'Submit'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='overlay-container'>
                    <div className='overlay'>
                        <div className='overlay-panel overlay-left'>
                            <h1>Welcome Back!</h1>
                            <p>
                                To begin chatting please login with your
                                personal info
                            </p>
                            <button
                                className='ghost'
                                id='signIn'
                                onClick={this.toggleClassInactive}
                            >
                                {' '}
                                Sign In
                            </button>
                        </div>
                        <div className='overlay-panel overlay-right'>
                            <h1>Don't have an account?</h1>
                            <p>
                                Enter your personal details to begin chatting
                                with other users by clicking the button below.
                            </p>
                            <button
                                className='ghost'
                                id='signUp'
                                onClick={this.toggleClassActive}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);

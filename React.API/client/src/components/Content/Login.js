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
        this.state = { data: [] };
    }
    toggleClassActive = () => {
        this.container.current.classList.add('right-panel-active');
    };

    toggleClassInactive = () => {
        this.container.current.classList.remove('right-panel-active');
    };

    clickSignIn = () => {
        document.querySelector('#signIn').click();
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
                        enableReinitialize
                        initialValues={{
                            name: this.props.user,
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
                                        `https://localhost:5001/api/users?=${this.props.users}`,
                                        values,
                                        null,
                                        2
                                    )
                                    .then((res) => {
                                        console.log(res);
                                        console.log(res.data);
                                    });
                                resetForm();
                                setSubmitting(false);
                                this.props.history.push('/chat');
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
                                    value={this.props.user}
                                    placeholder='Enter Username'
                                    onChange={this.props.handleLoginChange}
                                />
                                <CustomTextInput
                                    label='Password'
                                    name='password'
                                    type='password'
                                    placeholder='Enter Password'
                                />
                                <button
                                    type='submit'
                                    onClick={this.props.handleLoginSubmit}
                                >
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
                        enableReinitialize
                        initialValues={{
                            username: this.props.user,
                            email: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .min(3, 'Must be at least 3 characters long')
                                .max(15, 'Must not exceed 15 characters')
                                .required('Required'),
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),
                            password: Yup.string().required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                // TODO: SEND POST REQUEST API
                                axios
                                    .post(
                                        'https://localhost:5001/api/registration',
                                        values,
                                        null,
                                        2
                                    )
                                    .then((res) => {
                                        console.log(res);
                                        console.log(res.data);
                                    });
                                resetForm();
                                setSubmitting(false);

                                {
                                    this.clickSignIn();
                                }
                                alert(
                                    'Thank you for joining Chatterbox. Please sign in with your new username.'
                                );
                            }, 2000);
                        }}
                    >
                        {(props) => (
                            <Form className='register-form'>
                                <h1>Create an account.</h1>
                                <CustomTextInput
                                    label='Username'
                                    name='name'
                                    type='text'
                                    value={this.props.user}
                                    placeholder='New Username'
                                    onChange={this.props.handleLoginChange}
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
                                <button
                                    type='submit'
                                    onClick={this.props.handleLoginSubmit}
                                >
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

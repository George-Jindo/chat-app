import React, { Component } from 'react';
import { Formik, useField, Form } from 'formik';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
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
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .min(3, 'Must be at least 3 characters long')
                            .max(15, 'Must not exceed 15 characters')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            debugger;
                            alert(JSON.stringify(values, null, 2));
                            resetForm();
                            setSubmitting(false);
                            {
                                this.props.history.push('/chat');
                            }
                            console.log('This is working to this point');
                        }, 3000);
                    }}
                >
                    {(props) => (
                        <Form>
                            <h1>Login to begin chatting</h1>
                            <CustomTextInput
                                label='Name'
                                name='name'
                                type='text'
                                placeholder='Enter Username'
                            />
                            <CustomTextInput
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='Enter Email'
                            />
                            <button type='submit'>
                                {props.isSubmitting ? 'Loading...' : 'Submit'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default withRouter(Login);

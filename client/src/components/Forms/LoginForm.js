import React, { Component } from 'react';
import Axios from 'axios';

import { Button } from 'semantic-ui-react';

const formValid = ({ formError, ...rest }) => {
    let valid = true;

    Object.values(formError).forEach((val) => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach((val) => {
        val === null && (valid = false);
    });
    return valid;
};

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            open: true,
            userName: null,
            formError: {
                userName: '',
            },
        };
    }

    onChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        let formError = this.state.formError;

        switch (name) {
            case 'userName':
                formError.userName =
                    value.length < 3 ? 'minimum 3 characters required' : '';
                break;
            default:
        }

        this.setState({ formError, [name]: value });
    };

    onSearch = (e) => {
        const { userName } = this.state;

        if (userName === '') {
            return;
        }

        localStorage.setItem('userName', userName);
        console.log(localStorage.getItem('userName'));
    };

    onSubmit = (e, closeModal) => {
        e.preventDefault();

        if (formValid(this.state)) {
            Axios.post('http://localhost:5000/api/authenticate').then((res) => {
                if (res.data.isSuccessful === true) {
                    alert('Your username is: ' + this.input.value);
                    console.log(this.props);
                    this.props.close(closeModal);
                } else {
                    alert('Error Message: ' + res.data.ErrorMessage);
                }
            });
        } else {
            alert(
                'Error message: Please enter a username with a minimum of 3 characters'
            );
        }
    };

    render() {
        const { formError } = this.state;
        return (
            <div className='ui form'>
                <div className='required field'>
                    <form
                        action='Main.js'
                        className='form-inside-input'
                        onSubmit={this.onSubmit}
                        noValidate
                    >
                        <label>Username:</label>
                        <input
                            className={
                                formError.userName.length > 0 ? 'error' : null
                            }
                            type='text'
                            placeholder='Enter username'
                            name='userName'
                            onChange={this.onChange}
                            ref={(input) => (this.input = input)}
                            noValidate
                        ></input>
                        {formError.userName.length > 0 && (
                            <span>{formError.userName}</span>
                        )}

                        <Button
                            type='submit'
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Let me in!'
                            onClick={() => {
                                this.onSearch();
                            }}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;

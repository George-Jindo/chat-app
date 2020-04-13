import React, { Component } from 'react';
import Axios from 'axios';
import { Header, Modal, Icon, Button } from 'semantic-ui-react';
import { LoginForm } from '../Forms/LoginForm';
//import { LoginForm } from '../Forms/LoginForm';

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

class UserModal extends Component {
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

    // onChange = (e) => {
    //     e.preventDefault();

    //     const { name, value } = e.target;
    //     let formError = this.state.formError;

    //     switch (name) {
    //         case 'userName':
    //             formError.userName =
    //                 value.length < 3 ? 'minimum 3 characters required' : '';
    //             break;
    //         default:
    //     }

    //     this.setState({ formError, [name]: value });
    // };

    // onSearch = (e) => {
    //     const { userName } = this.state;

    //     if (userName === '') {
    //         return;
    //     }

    //     localStorage.setItem('userName', userName);
    //     console.log(localStorage.getItem('userName'));
    // };

    // onSubmit = (e) => {
    //     e.preventDefault();

    //     if (formValid(this.state)) {
    //         Axios.post('http://localhost:5000/api/authenticate').then((res) => {
    //             if (res.data.isSuccessful === true) {
    //                 alert('Your username is: ' + this.input.value);
    //                 this.close();
    //             } else {
    //                 alert('Error Message: ' + res.data.ErrorMessage);
    //             }
    //         });
    //     } else {
    //         alert(
    //             'Error message: Please enter a username with a minimum of 3 characters'
    //         );
    //     }
    // };

    show = (dimmer) => () => this.setState({ dimmer, open: true });
    close = () => this.setState({ open: false });

    render() {
        const { open, dimmer, formError } = this.state;

        return (
            <div>
                <Modal
                    dimmer={dimmer}
                    open={open}
                    onClose={this.close}
                    closeIcon
                >
                    <Modal.Header>Welcome to Chatterbox!</Modal.Header>
                    <Modal.Content image>
                        <Icon name='comments' size='massive' />
                        <Modal.Description>
                            <Header>Enter a username to begin</Header>
                            <LoginForm {...props} />>
                            {/* <div className='ui form'>
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
                                                formError.userName.length > 0
                                                    ? 'error'
                                                    : null
                                            }
                                            type='text'
                                            placeholder='Enter username'
                                            name='userName'
                                            onChange={this.onChange}
                                            ref={(input) =>
                                                (this.input = input)
                                            }
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
                            </div> */}
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default UserModal;

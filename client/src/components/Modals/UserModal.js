import React, { Component } from 'react';
import { Button, Header, Modal, Icon } from 'semantic-ui-react';

const formValid = ({ formError, ...rest }) => {
    let valid = true;

    Object.values(formError).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });
    return valid;
};

class UserModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            userName: null,
            formError: {
                userName: ''
            }
        };
    }

    onChange = e => {
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

        this.setState({ formError, [name]: value }, () =>
            console.log(this.state)
        );
    };

    onSearch = e => {
        const { userName } = this.state;

        if (userName === '') {
            return;
        }

        localStorage.setItem('userName', userName);
    };

    onSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            // console.log(`
            // --SUBMITTING--
            // User Name: ${this.state.userName}
            // `);
            setTimeout(() => alert('It has been 3 seconds'), 3000);
            this.close();
        } else {
            alert(
                'Error message: Please enter a username with a minimum of 3 characters'
            );
        }
    };

    show = dimmer => () => this.setState({ dimmer, open: true });
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
                            <div className='ui form'>
                                <div className='required field'>
                                    <form
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
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default UserModal;

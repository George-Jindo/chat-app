import React, { Component } from 'react';
import { Button, Header, Modal, Icon } from 'semantic-ui-react';

class UserModal extends Component {
    state = {
        open: true,
        username: ''
    };

    onChange = e => {
        this.setState({ username: e.target.value });
        console.log(e.target.value);
    };

    onSearch = e => {
        const { username } = this.state;

        if (username === '') {
            return;
        }

        console.log('logging from onSearch');

        localStorage.setItem('username', username);
    };

    show = dimmer => () => this.setState({ dimmer, open: true });
    close = () => this.setState({ open: false });

    render() {
        const { open, dimmer } = this.state;

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
                            <fragment class='ui form'>
                                <fragment class='required field'>
                                    <label>Username:</label>
                                    <input
                                        type='text'
                                        placeholder='Enter username'
                                        name='username'
                                        onChange={this.onChange}
                                        required
                                    ></input>
                                </fragment>
                            </fragment>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Let me in!'
                            onClick={() => {
                                console.log('modal closed ');
                                this.onSearch();
                                this.close();
                            }}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default UserModal;

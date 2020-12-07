import React from 'react';

import { Header, Modal, Icon } from 'semantic-ui-react';
import LoginForm from '../Forms/LoginForm';

export const UserModal = (props) => {
    return (
        <div>
            <Modal open={props.open} onClose={props.close} closeIcon>
                <Modal.Header>Welcome to Chatterbox!</Modal.Header>
                <Modal.Content image>
                    <Icon name='comments' size='massive' />
                    <Modal.Description>
                        <Header>Enter a username to begin</Header>
                        <LoginForm {...props} />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    );
};

import React from 'react';
import { Menu, Container, Icon, Button } from 'semantic-ui-react';

const NavBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <Icon name='comments' size='large' alt='logo' />
                    Chatterbox
                </Menu.Item>
                <Menu.Item name='messages' />
                <Menu.Item name='friends' />
            </Container>

            <Menu.Menu position='right'>
                <Menu.Item>
                    <Button primary>Register</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button>Log-in</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default NavBar;

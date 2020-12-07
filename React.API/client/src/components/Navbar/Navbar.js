import React, { Component } from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return (
            <Menu fixed='top' inverted pointing>
                <Container>
                    <Menu.Item header>
                        <Icon name='comments' size='large' alt='logo' />
                        Chatterbox
                    </Menu.Item>
                    <Menu.Item name='messages' />
                </Container>
            </Menu>
        );
    }
}

export default NavBar;

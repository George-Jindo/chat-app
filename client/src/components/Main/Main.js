import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ChatScreen from '../Content/ChatScreen';

class Main extends Component {
    render() {
        return (
            <Container text style={{ marginTop: 50 }}>
                <ChatScreen />
            </Container>
        );
    }
}

export default Main;

import React, { Component } from 'react';
//import axios from 'axios';
import { Comment, Header, Container } from 'semantic-ui-react';
import './ChatScreen.css';
import MessageForm from '../Forms/MessageForm';

class ChatScreen extends Component {
    render() {
        const messages = this.props.messages.map((messages) => {
            return (
                <Comment>
                    <Comment.Content>
                        <Comment.Author>
                            {messages.username}
                            <Comment.Metadata>
                                {messages.created_at}
                            </Comment.Metadata>
                        </Comment.Author>

                        <Comment.Text>{messages.text}</Comment.Text>
                    </Comment.Content>
                </Comment>
            );
        });
        return (
            <div className='styled'>
                <Container
                    text
                    style={{
                        marginTop: 50,
                        overFlowY: 'auto',
                    }}
                >
                    <Comment.Group>
                        <Header as='h3' dividing>
                            Chatterbox Messages
                        </Header>
                        <div className='messages'>{messages}</div>

                        <MessageForm />
                    </Comment.Group>
                </Container>
            </div>
        );
    }
}

export default ChatScreen;

import React, { Component } from 'react';
import { Button, Comment, Form, Header, TextArea } from 'semantic-ui-react';
import './ChatScreen.css';

class ChatScreen extends Component {
    render() {
        return (
            <div>
                <Comment.Group>
                    <Header as='h3' dividing>
                        Chatterbox Messages
                    </Header>

                    <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>How artistic!</Comment.Text>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'>Elliot Fu</Comment.Author>
                            <Comment.Metadata>
                                <div>Yesterday at 12:30AM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                <p>
                                    This has been very useful for my research.
                                    Thanks as well!
                                </p>
                            </Comment.Text>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'>
                                Joe Henderson
                            </Comment.Author>
                            <Comment.Metadata>
                                <div>5 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                Dude, this is awesome. Thanks so much
                            </Comment.Text>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <TextArea
                            placeholder='Reply here'
                            style={{ maxHeight: 50 }}
                        />
                        <Button
                            content='Add Reply'
                            labelPosition='left'
                            icon='edit'
                            primary
                            style={{ marginTop: 5 }}
                        />
                    </Form>
                </Comment.Group>
            </div>
        );
    }
}

export default ChatScreen;

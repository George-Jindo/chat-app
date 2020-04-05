import React, { Component } from 'react';
import axios from 'axios';
import { Button, Comment, Form, Header, TextArea } from 'semantic-ui-react';
import './ChatScreen.css';
import UserModal from '../Modals/UserModal';

class ChatScreen extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler = e => {
        e.preventDefault();

        axios
            .post('http://localhost:5000/api/messages')
            .then(res => {
                if (res.status === 201) {
                    axios.get('api/messages').then(res => {
                        this.setState({
                            messages: res.data
                        });
                    });
                }
            })
            .catch(error => {
                console.log('Error Message: ' + error);
            });
    };

    render() {
        return (
            <div>
                <Comment.Group>
                    <Header as='h3' dividing>
                        Chatterbox Messages
                    </Header>

                    <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'>John</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 5:30PM</div>
                            </Comment.Metadata>
                            <Comment.Text>Whoa this is cool!</Comment.Text>
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
                            onClick={this.onClickHandler}
                        />
                    </Form>
                </Comment.Group>
            </div>
        );
    }
}

export default ChatScreen;

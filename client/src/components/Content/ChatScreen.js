import React, { Component } from 'react';
import axios from 'axios';
import {
    Button,
    Comment,
    Form,
    Header,
    TextArea,
    Container,
} from 'semantic-ui-react';
import './ChatScreen.css';

class ChatScreen extends Component {
    onClickHandler = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:5000/api/messages')
            .then((res) => {
                if (res.status === 201) {
                    axios.get('api/messages').then((res) => {
                        this.setState({
                            messages: res.data,
                        });
                    });
                }
            })
            .catch((error) => {
                console.log('Error Message: ' + error);
            });
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <Container text style={{ marginTop: 50 }}>
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
                                <Comment.Author as='a'>
                                    {this.props.messages.userName}
                                </Comment.Author>
                                <Comment.Metadata>
                                    <div>{this.props.messages.createdAt}</div>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <ul
                                        style={{
                                            listStylePosition: 'outside',
                                            listStyleType: 'none',
                                            margin: 0,
                                            padding: 0,
                                        }}
                                    >
                                        {this.props.messages.text.map(
                                            (text, i) => (
                                                <li key={i}>{text}</li>
                                            )
                                        )}
                                    </ul>
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
                </Container>
            </div>
        );
    }
}

export default ChatScreen;

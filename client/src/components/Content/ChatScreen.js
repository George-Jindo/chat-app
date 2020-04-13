import React, { Component } from 'react';
//import axios from 'axios';
import {
    Comment,
    Header,
    Container,
    Form,
    TextArea,
    Button,
} from 'semantic-ui-react';
import './ChatScreen.css';
//import { MessageForm } from '../Forms/MessageForm';

class ChatScreen extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // TO BE USED TO SEND THE DATA TO BACKEND
        const messageText = this.state;
        console.log('Message sent', messageText);
    };

    handleInputChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onClickHandler = (e) => {
        e.preventDefault();

        // axios
        //     .post('http://localhost:5000/api/messages')
        //     .then((res) => {
        //         if (res.status === 201) {
        //             axios.get('api/messages').then((res) => {
        //                 this.setState({
        //                     messages: res.data,
        //                 });
        //             });
        //         }
        //     })
        //     .catch((error) => {
        //         console.log('Error Message: ' + error);
        //     });
    };

    render() {
        const { text } = this.state;
        console.log(this.props);
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
                        <div className='messages'>
                            <Comment>
                                <Comment.Content>
                                    <Comment.Author as='a'>John</Comment.Author>
                                    <Comment.Metadata>
                                        <div>Today at 5:30PM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        Whoa this is cool!
                                    </Comment.Text>
                                </Comment.Content>
                            </Comment>

                            <Comment>
                                <Comment.Content>
                                    <Comment.Author as='a'>
                                        {/* {this.props.messages.userName} */}
                                    </Comment.Author>
                                    <Comment.Metadata>
                                        <div>
                                            {/* {this.props.messages.createdAt} */}
                                        </div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        {/* <ul
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
                                        </ul> */}
                                    </Comment.Text>
                                </Comment.Content>
                            </Comment>

                            <Comment>
                                <Comment.Content>
                                    <Comment.Author as='a'>
                                        (USERNAME)
                                    </Comment.Author>
                                    <Comment.Metadata>
                                        <div>Today at 8:00AM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>{text}</Comment.Text>
                                </Comment.Content>
                            </Comment>
                        </div>

                        <Form onSubmit={this.handleSubmit}>
                            <TextArea
                                placeholder='Reply here'
                                style={{ maxHeight: 50 }}
                                type='text'
                                name='text'
                                onChange={this.handleInputChange}
                            />
                            <Button
                                type='submit'
                                content='Add Reply'
                                labelPosition='left'
                                icon='edit'
                                primary
                                style={{ marginTop: 5 }}
                                //onClick={this.onClickHandler}
                            />
                        </Form>
                    </Comment.Group>
                </Container>
            </div>
        );
    }
}

export default ChatScreen;

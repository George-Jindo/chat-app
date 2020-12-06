import React, { Component } from 'react';

import { Button, Form, TextArea } from 'semantic-ui-react';

class MessageForm extends Component {
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
        return (
            <Form>
                <TextArea
                    placeholder='Reply here'
                    style={{ maxHeight: 50 }}
                    type='text'
                    name='text'
                    //onChange={this.handleInputChange}
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
        );
    }
}

export default MessageForm;

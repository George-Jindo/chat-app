import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Styles.css';
import Main from './components/Content/Main';
import Login from './components/Content/Login';

import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            messageField: '',
        };
    }

    // Message Handling Start -->
    handleMessageChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
        console.log(value);
    };

    submitValidation() {
        const { name, messageField } = this.state;
        return name.length > 0 && messageField.trim();
    }

    handleMessageSubmit = (e) => {
        if (!this.submitValidation()) {
            e.preventDefault();
            this.clearMessageInput();
            return;
        }

        let messages = this.state.messages;
        let messageField = this.state.messageField;
        const userName = localStorage.getItem('user');
        let newMessages = [
            ...messages,
            {
                text: messageField,
                name: userName,
                created_at: new Date(),
            },
        ];
        this.setState({ messages: newMessages });

        console.log(newMessages);

        axios.post('https://localhost:5001/api/messages').then((res) => {
            console.log(res);
            console.log(res.data);
        });

        this.clearMessageInput();
    };

    clearMessageInput = () => {
        this.setState({
            messageField: '',
        });
    };

    onKeyPress = (e) => {
        if (!this.submitValidation()) return this.clearMessageInput();

        if (e.which === 13) {
            e.preventDefault();
            let messages = this.state.messages;
            let messageField = this.state.messageField;
            const userName = localStorage.getItem('username');
            let newMessages = [
                ...messages,
                { text: messageField, name: userName, created_at: new Date() },
            ];
            this.setState({ messages: newMessages });

            this.clearMessageInput();
        }
    };
    // Message Handling End <--

    // Login Handling Start -->
    handleLoginChange = (e) => {
        const input = e.target;
        const value = input.value;

        this.setState({ [input.name]: value });
    };

    handleLoginSubmit = (e) => {
        const { name } = this.state;
        localStorage.setItem('username', name);
    };
    // Login Handling End <--

    // Lifecycle Components
    componentDidMount() {
        const name = localStorage.getItem('username') || [];
        this.setState({ name });
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <Route path='/' exact>
                        <Login
                            user={this.state.name}
                            handleLoginChange={this.handleLoginChange}
                            handleLoginSubmit={this.handleLoginSubmit}
                        />
                    </Route>
                    <Route path='/chat' exact>
                        <Main
                            name={this.state.name}
                            messages={this.state.messages}
                            messageField={this.state.messageField}
                            handleChange={this.handleMessageChange}
                            handleSubmit={this.handleMessageSubmit}
                            onKeyPress={this.onKeyPress}
                            isLoggedIn={this.state.isLoggedIn}
                        />
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;

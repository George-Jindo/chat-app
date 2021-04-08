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

        const body = {
            userId: '9f358098-1487-4f84-be7d-a0aad493070c',
            text: this.state.messageField,
        };

        const config = {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        };

        axios.post('/api/messages', body, config).then((res) => {
            console.log('message sent');
            // retrieve messages
            axios.get('/api/messages').then((res2) => {
                console.log('message received');
                this.setState({ messages: res2.data });
            });
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
            axios.post('/api/messages').then((res) => {
                // retrieve messages
                axios.get('/api/messages').then((res2) => {
                    this.setState({ messages: res2.data });
                });
            });

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

        setInterval(() => {
            axios.get('/api/messages').then((res2) => {
                console.log('messages rendered in 5 seconds');
                this.setState({ messages: res2.data });
            });
        }, 5000);
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

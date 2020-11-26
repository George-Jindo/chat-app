import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Styles.css';
import Main from './components/Content/Main';
import Login from './components/Content/Login';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                    id: 1,
                    name: 'Tommy',
                    text: 'Hello world!',
                    created_at: 'Today at 5:00PM',
                },
                {
                    id: 2,
                    name: 'Mark',
                    text: 'How are you doing Tommy?',
                    created_at: 'Today at 5:01PM',
                },
            ],
            name: '',
            messageField: '',
            newMessages: '',
            isLoggedIn: true,
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

    handleMessageSubmit = (e) => {
        e.preventDefault();
        let messages = this.state.messages;
        let messageField = this.state.messageField;
        const userName = localStorage.getItem('user');
        let newMessages = [...messages, { text: messageField, name: userName }];
        this.setState({ messages: newMessages });

        this.clearMessageInput();
    };

    clearMessageInput = () => {
        this.setState({
            messageField: '',
        });
    };

    onKeyPress = (e) => {
        if (e.which === 13) {
            e.preventDefault();
            let messages = this.state.messages;
            let messageField = this.state.messageField;
            let newMessages = [...messages, { text: messageField }];
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
        localStorage.setItem('user', name);
    };

    componentDidMount() {
        const name = localStorage.getItem('user') || '';
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

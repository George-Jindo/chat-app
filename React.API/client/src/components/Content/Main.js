import React, { Component } from 'react';
import axios from 'axios';
import './Main.css';
import { withRouter } from 'react-router-dom';

import moment from 'moment';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';

class Main extends Component {
    state = {
        users: [],
        messages: [],
    };

    isLoggedOut = () => {
        const name = localStorage.removeItem('user') || [];
        this.setState({ name });
        this.props.history.push('/');
    };

    async componentDidMount() {
        // Make multiple API calls
        const users = await axios.get('/api/users');
        const messages = await axios.get('/api/messages');
        this.setState({ users: users.data, messages: messages.data });

        console.log({ users, messages });

        /*const [userResponse, messageResponse] = await Promise.all([
            axios.get('/api/users'),
            axios.get('/api/messages'),
        ]);

        this.setState({
            users: userResponse.data,
            messages: messageResponse.data,
        });
        console.log(userResponse.data, messageResponse.data);*/
    }

    render() {
        // TODO: Question 1 right below. users and messages not defined.
        //const messageUser = users.find((user) => user.id === message.userId);
        const messages = this.state.messages.map((messages, index) => {
            return (
                <div className='messages' key={index}>
                    <header> {messages.username}:</header>
                    <p>{messages.text}</p>
                    <footer>
                        {moment(messages.created_at).format(
                            'MMM Do, h:mm:ss A'
                        )}
                    </footer>
                </div>
            );
        });

        //const users = this.props.name;

        return (
            <div className='container'>
                <div className='navbarContainer'>
                    <div className='navbarLogo'>
                        <h3>Chatterbox</h3>
                    </div>
                    <i className='far fa-comments'></i>
                    <button className='logoutButton' onClick={this.isLoggedOut}>
                        Log Out
                    </button>
                </div>
                <div className='main'>
                    <div className='side-menu'>
                        <h4>online users</h4>
                        <Divider />
                        <List>
                            {this.state.users.map((user, i) => (
                                <ListItem key={i}>
                                    <ListItemText primary={user.username} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className='chat-screen'>
                        <div className='chat-body'>{messages}</div>
                        <div className='chat-input'>
                            <input
                                type='text'
                                value={this.props.messageField}
                                onChange={this.props.handleChange}
                                name='messageField'
                                onKeyPress={this.props.onKeyPress}
                                autoComplete='off'
                            ></input>
                            <button onClick={this.props.handleSubmit}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);

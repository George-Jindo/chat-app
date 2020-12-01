import React, { Component } from 'react';
import './Main.css';

import moment from 'moment';

import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';

class Main extends Component {
    render() {
        const messages = this.props.messages.map((messages, index) => {
            return (
                <div className='messages' key={index}>
                    <header> {messages.name}:</header>
                    <p>{messages.text}</p>
                    <footer>
                        {moment(messages.created_at).format(
                            'MMM Do, h:mm:ss A'
                        )}
                    </footer>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='navbarContainer'>
                    <div className='navbarLogo'>
                        <h3>Chatterbox</h3>
                    </div>
                    <i class='far fa-comments'></i>
                    <Button>Log Out</Button>
                </div>
                <div className='main'>
                    <div className='side-menu'>
                        <h4>online users</h4>
                        <Divider />
                        <List>
                            {['George', 'Mark', 'Jenny', 'Thomas'].map(
                                (user, i) => (
                                    <ListItem key={i}>
                                        <ListItemText primary={user} />
                                    </ListItem>
                                )
                            )}
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

export default Main;

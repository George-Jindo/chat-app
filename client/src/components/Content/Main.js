import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    render() {
        const messages = this.props.messages.map((messages) => {
            return (
                <div className='messages'>
                    <header> {messages.name}</header>
                    <p>{messages.text}</p>
                    <footer>{messages.created_at}</footer>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='navbarContainer'>
                    <div className='navbarLogo'>
                        <h2>Chatterbox</h2>
                    </div>
                </div>
                <div className='main'>
                    <div className='side-menu'>
                        <h3>Rooms</h3>
                        <button className='rm-btn' href='#'>
                            General
                        </button>
                        <button className='rm-btn' href='#'>
                            <strong>+</strong>
                        </button>
                    </div>
                    <div className='chat-screen'>
                        <div className='chat-body'>{messages}</div>
                        <div className='chat-input'>
                            <input
                                type='text'
                                value={this.props.messageField}
                                onChange={this.props.handleChange}
                                name='messageField'
                            ></input>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;

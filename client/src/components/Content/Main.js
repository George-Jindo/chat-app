import React, { Component, Fragment } from 'react';
import './Main.css';

class Main extends Component {
    render() {
        console.log('Error:', this.props);
        const messages = this.props.messages.map((messages) => {
            return (
                <Fragment>
                    <header> {messages.name}</header>
                    <p>{messages.text}</p>
                    <footer>{messages.created_at}</footer>
                </Fragment>
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
                        <div className='chat-body'>
                            <div className='message'>{messages}</div>
                        </div>
                        <div className='chat-input'>
                            <input type='text'></input>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;

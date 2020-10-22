import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <div className='navbarContainer'>
                    <div className='navbarLogo'>
                        <h1>Chatterbox</h1>
                    </div>
                    <ul className='navbarLinks'>
                        <li>
                            <a href='#'>Test</a>
                        </li>
                        <li>
                            <a href='#'>Test</a>
                        </li>
                        <li>
                            <a href='#'>Test</a>
                        </li>
                    </ul>
                </div>
                <div className='main'>
                    <div className='side-menu'>
                        <h3>Rooms</h3>
                        <a className='rm-btn' href='#'>
                            Testing
                        </a>
                        <a className='rm-btn' href='#'>
                            <strong>+</strong>
                        </a>
                    </div>
                    <div className='chat-screen'>
                        <div className='chat-body'>
                            <div className='message'>
                                <header>Michael:</header>
                                <p>This is a message!</p>
                                <footer>16:00</footer>
                            </div>
                            <div className='message'>
                                <header>Scott Miller:</header>
                                <p>
                                    This is another message! This is another
                                    message! This is another message! This is
                                    another message! This is another message!
                                    This is another message!
                                </p>
                                <footer>16:01</footer>
                            </div>
                            <div className='message'>
                                <header>Scott Miller:</header>
                                <p>This is another message!</p>
                                <footer>16:01</footer>
                            </div>
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

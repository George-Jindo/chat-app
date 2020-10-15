import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <div className='navbar'></div>
                <div className='main'>
                    <div className='side-menu'>
                        <a className='rm-btn' href='#'>
                            Testing
                        </a>
                    </div>
                    <div className='chat-screen'>Hello World</div>
                </div>
            </div>
        );
    }
}

export default Main;

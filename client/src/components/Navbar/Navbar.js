import React from 'react';
import './Navbar.css';
import Logo from './chatter-logo.png';

const navbar = props => (
    <header>
        <nav>
            <div className='logo'>
                <h4>Chatterbox App</h4>
            </div>
            <div className='title'>
                <h4>Messages</h4>
            </div>
            <div className='logo-img'>
                <img src={Logo} alt='site logo'></img>
            </div>
        </nav>
    </header>
);

export default navbar;

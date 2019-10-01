import React from 'react';
import './Main.css';

const main = props => (
    <div className='container'>
        <div className='users grid'>Users Online</div>
        <div className='search_user grid'>Search Users</div>
        <div className='messages grid'>
            <div className='incoming'>
                <ul className='list_font'>
                    <li>
                        <p>Sample Message: Hello you!</p>
                    </li>
                    <li>
                        <p>Sample Message: I am fine</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className='send_message grid'>
            <input
                type='text'
                className='send_field'
                name='username'
                placeholder='Start typing to chat'
                required
            ></input>
        </div>
    </div>
);

export default main;

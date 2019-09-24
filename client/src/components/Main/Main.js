import React from 'react';
import './Main.css';

const main = props => (
    <div className='container'>
        <div className='users grid'>Users Online</div>
        <div className='search_user grid'>Search Users</div>
        <div className='messages grid'>Messages Go Here</div>
        <div className='send_message grid'>Send Messages Here</div>
    </div>
);

export default main;

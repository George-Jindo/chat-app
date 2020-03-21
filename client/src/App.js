import React, { Component } from 'react';
import './Styles.css';
import Navbar from './components/Navbar/Navbar';
import UserModal from './components/Modals/UserModal';
import Main from './components/Main/Main';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            userName: ''
        };
    }

    onChange = e => {
        this.setState({ userName: e.target.value });
        console.log(e.target.value);
    };

    /*onSearch = e => {
        const { userName } = this.state;

        if (userName === '') {
            return;
        }

        console.log('logging from onSearch');

        localStorage.setItem('username', userName);
    };*/

    render() {
        return (
            <div className='App'>
                <UserModal />
                <Navbar />
                <Main />
            </div>
        );
    }
}

export default App;

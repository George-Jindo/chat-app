import React, { Component } from 'react';
import './Styles.css';
import Navbar from './components/Navbar/Navbar';
import UserModal from './components/Modals/UserModal';
import Main from './components/Main/Main';

class App extends Component {
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

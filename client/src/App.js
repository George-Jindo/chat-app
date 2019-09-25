import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Popup from 'reactjs-popup';

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

    onSearch = e => {
        const { userName } = this.state;

        if (userName === '') {
            return;
        }
        console.log('logging from onSearch');
    };

    componentDidMount() {
        console.log('First this called');
    }

    render() {
        return (
            <div className='App'>
                <Popup
                    defaultOpen={
                        <button className='button'> Open Modal </button>
                    }
                    modal
                >
                    {close => (
                        <div className='modal'>
                            <a className='close' onClick={close}>
                                &times;
                            </a>
                            <div className='header'>
                                {' '}
                                Welcome to Chatterbox!{' '}
                            </div>
                            <div className='content'>
                                {' '}
                                <p>Enter a Username to begin chatting!</p>
                                <br></br>
                                <form>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Username'
                                            onChange={this.onChange}
                                        ></input>
                                    </div>

                                    <div className='actions'>
                                        <button
                                            type='button'
                                            className='btn-modal'
                                            onClick={() => {
                                                console.log('modal closed ');
                                                this.onSearch();
                                                close();
                                            }}
                                        >
                                            Enter Chat
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </Popup>
                <Navbar />
                <Main />
            </div>
        );
    }
}

export default App;

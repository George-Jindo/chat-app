import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Popup from 'reactjs-popup';

function App() {
    return (
        <div className='App'>
            <Popup
                trigger={<button className='button'> Open Modal </button>}
                modal
            >
                {close => (
                    <div className='modal'>
                        <a className='close' onClick={close}>
                            &times;
                        </a>
                        <div className='header'> Welcome to Chatterbox! </div>
                        <div className='content'>
                            {' '}
                            Enter a Username to begin chatting!
                            <form method='POST'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Username'
                                    ></input>
                                </div>
                            </form>
                        </div>
                        <div className='actions'>
                            <button
                                type='submit'
                                className='btn-modal'
                                onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                }}
                            >
                                Enter Chat
                            </button>
                        </div>
                    </div>
                )}
            </Popup>
            <Navbar />
            <Main />
        </div>
    );
}

export default App;

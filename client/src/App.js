import React, { Component } from 'react';
import './Styles.css';
import Navbar from './components/Navbar/Navbar';
import UserModal from './components/Modals/UserModal';
import ChatScreen from './components/Content/ChatScreen';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                    id: 1,
                    userName: 'Tommy',
                    text: 'Hello world!',
                },
            ],
        };
    }

    render() {
        var messages = {
            id: 1,
            userName: 'Tommy',
            text: ['Hello world!', 'How is everyone doing today?'],
            createdAt: 'Yesterday at 5:56PM',
        };
        return (
            <div className='App'>
                <UserModal />
                <Navbar />
                <ChatScreen messages={messages} />
                {/* <Main /> */}
            </div>
        );
    }
}

export default App;

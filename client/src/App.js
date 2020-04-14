import React, { Component } from 'react';
import './Styles.css';
import Navbar from './components/Navbar/Navbar';
import { UserModal } from './components/Modals/UserModal';
import ChatScreen from './components/Content/ChatScreen';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                    id: 1,
                    username: 'Tommy',
                    text: 'Hello world!',
                    created_at: 'Today at 5:00PM',
                },
                {
                    id: 2,
                    username: 'Tommy',
                    text: 'How are you doing?',
                    created_at: 'Today at 5:01PM',
                },
            ],
            open: true, // used for modal open by default
        };
    }

    closeModal = () => this.setState({ open: false });

    render() {
        const { open } = this.state;
        return (
            <div className='App'>
                <UserModal open={open} close={this.closeModal.bind(this)} />
                <Navbar />
                <ChatScreen messages={this.state.messages} />
            </div>
        );
    }
}

export default App;

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
                    userName: 'Tommy',
                    text: 'Hello world!',
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
                <ChatScreen />
                {/* <Main /> */}
            </div>
        );
    }
}

export default App;

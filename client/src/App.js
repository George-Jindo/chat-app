import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Styles.css';
//import Navbar from './components/Navbar/Navbar';
//import { UserModal } from './components/Modals/UserModal';
//import ChatScreen from './components/Content/ChatScreen';
import Main from './components/Content/Main';
import Login from './components/Content/Login';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                    id: 1,
                    name: 'Tommy',
                    text: 'Hello world!',
                    created_at: 'Today at 5:00PM',
                },
                {
                    id: 2,
                    name: 'Tommy',
                    text: 'How are you doing?',
                    created_at: 'Today at 5:01PM',
                },
            ],
            open: true, // used for modal open by default
        };
    }

    closeModal = () => this.setState({ open: false });

    render() {
        //const { open } = this.state;
        return (
            <Router>
                <div className='App'>
                    <Route path='/' exact>
                        <Login />
                    </Route>
                    <Route path='/chat' exact>
                        <Main messages={this.state.messages} />
                    </Route>

                    {/*<UserModal open={open} close={this.closeModal.bind(this)} /> */}
                    {/*<Navbar />*/}
                    {/*<ChatScreen messages={this.state.messages} />*/}
                </div>
            </Router>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Styles.css';
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
                    name: 'Mark',
                    text: 'How are you doing Tommy?',
                    created_at: 'Today at 5:01PM',
                },
            ],
            messageField: '',
        };
    }

    handleMessageChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
        console.log(value);
    };

    handleMessageSubmit = (e) => {
        e.preventDefault();
        this.clearMessageInput();
    };

    clearMessageInput = () => {
        this.setState({
            messageField: '',
        });
    };

    onKeyPress = (e) => {
        if (e.which === 13) {
            e.preventDefault();
            this.clearMessageInput();
        }
    };

    render() {
        return (
            <Router>
                <div className='App'>
                    <Route path='/' exact>
                        <Login />
                    </Route>
                    <Route path='/chat' exact>
                        <Main
                            messages={this.state.messages}
                            messageField={this.state.messageField}
                            handleChange={this.handleMessageChange}
                            handleSubmit={this.handleMessageSubmit}
                            onKeyPress={this.onKeyPress}
                        />
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;

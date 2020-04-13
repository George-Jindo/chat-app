import React, { Component } from 'react';
import './Styles.css';
import Navbar from './components/Navbar/Navbar';
import UserModal from './components/Modals/UserModal';
import ChatScreen from './components/Content/ChatScreen';

// Form validation for Modal form
const formValid = ({ formError, ...rest }) => {
    let valid = true;

    Object.values(formError).forEach((val) => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach((val) => {
        val === null && (valid = false);
    });
    return valid;
};

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
            formError: {
                // used for form validation
                userName: '',
            },
            userName: null, // used for input field for modal
            open: true, // used for modal open by default
        };
    }

    onChangeModal = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        let formError = this.state.formError;

        switch (name) {
            case 'userName':
                formError.userName =
                    value.length < 3 ? 'minimum 3 characters required' : '';
                break;
            default:
        }

        this.setState({ formError, [name]: value });
    };

    onSearchModal = (e) => {
        const { userName } = this.state;

        if (userName === '') {
            return;
        }

        localStorage.setItem('userName', userName);
        console.log(localStorage.getItem('userName'));
    };

    onSubmitModal = (e) => {
        e.preventDefault();

        if (formValid(this.state)) {
            Axios.post('http://localhost:5000/api/authenticate').then((res) => {
                if (res.data.isSuccessful === true) {
                    alert('Your username is: ' + this.input.value);
                    this.close();
                } else {
                    alert('Error Message: ' + res.data.ErrorMessage);
                }
            });
        } else {
            alert(
                'Error message: Please enter a username with a minimum of 3 characters'
            );
        }
    };

    render() {
        // var messages = {
        //     id: 1,
        //     userName: 'Tommy',
        //     text: ['Hello world!', 'How is everyone doing today?'],
        //     createdAt: 'Yesterday at 5:56PM',
        // };
        return (
            <div className='App'>
                <UserModal
                    changeModal={this.onChangeModal.bind(this)}
                    searchModal={this.onSearchModal.bind(this)}
                    submitModal={this.onSubmitModal.bind(this)}
                />
                <Navbar />
                <ChatScreen messages={messages} />
                {/* <Main /> */}
            </div>
        );
    }
}

export default App;

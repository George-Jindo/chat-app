import React from 'react';

import { Button } from 'semantic-ui-react';

export const LoginForm = (props) => {
    return (
        <div className='ui form'>
            <div className='required field'>
                <form
                    action='Main.js'
                    className='form-inside-input'
                    onSubmit={this.onSubmit}
                    noValidate
                >
                    <label>Username:</label>
                    <input
                        className={
                            formError.userName.length > 0 ? 'error' : null
                        }
                        type='text'
                        placeholder='Enter username'
                        name='userName'
                        onChange={this.onChange}
                        ref={(input) => (this.input = input)}
                        noValidate
                    ></input>
                    {formError.userName.length > 0 && (
                        <span>{formError.userName}</span>
                    )}

                    <Button
                        type='submit'
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content='Let me in!'
                        onClick={() => {
                            this.onSearch();
                        }}
                    />
                </form>
            </div>
        </div>
    );
};

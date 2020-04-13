import React from 'react';

import { Button, Form, TextArea } from 'semantic-ui-react';

export const MessageForm = (props) => {
    return (
        <Form>
            <TextArea
                placeholder='Reply here'
                style={{ maxHeight: 50 }}
                type='text'
                name='text'
                //onChange={this.handleInputChange}
            />
            <Button
                type='submit'
                content='Add Reply'
                labelPosition='left'
                icon='edit'
                primary
                style={{ marginTop: 5 }}
                //onClick={this.onClickHandler}
            />
        </Form>
    );
};

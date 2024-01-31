import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap"

const SendMessageForm = ({sendMessage}) => {
    const[msg, setMessage] = useState('')
    
    return (
        <Form onSubmit={e => {
            e.preventDefault();
            sendMessage(msg);
            setMessage('');
        }}>
            <InputGroup>
                <InputGroup.Text>Chat</InputGroup.Text>
                <Form.Control 
                    type="user"
                    placeholder="Type a message..."
                    aria-label="Type a message..."
                    onChange={e => setMessage(e.target.value)}
                    value={msg}
                    />
                <Button variant="outline-primary" type="submit" disabled={!msg}>Send</Button>
            </InputGroup>
        </Form>
    )
}

export default SendMessageForm;
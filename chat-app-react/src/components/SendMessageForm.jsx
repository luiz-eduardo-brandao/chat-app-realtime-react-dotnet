import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import SendIcon from '@mui/icons-material/Send';

const SendMessageForm = ({sendMessage}) => {
    const[msg, setMessage] = useState('')
    
    return (
        <Form onSubmit={e => {
            e.preventDefault();
            sendMessage(msg);
            setMessage('');
        }}>
            <Row className="send-message px-3">
                {/* <InputGroup.Text>Chat</InputGroup.Text> */}
                <Col xs={8} sm={8} md={10}>
                    <Form.Control 
                        variant="outline"
                        type="text"
                        placeholder="Type a message..."
                        aria-label="Type a message..."
                        onChange={e => setMessage(e.target.value)}
                        value={msg}
                        width="80%"
                        className="send-message-form"
                    />
                </Col>
                <Col xs={4} sm={4} md={2}>
                    <Button variant="outline-primary" type="submit" disabled={!msg}><SendIcon/></Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SendMessageForm;
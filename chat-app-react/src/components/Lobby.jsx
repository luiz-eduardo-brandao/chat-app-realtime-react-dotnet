import { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';

const Lobby = ({ joinChatRoom }) => {
    const[username, setUsername] = useState();
    const[chatroom, setChatroom] = useState();

    return (
        <Form onSubmit={e => {
            e.preventDefault();
            joinChatRoom(username, chatroom);
        }}
        className='form-card'
        >
            <h1 className='form-title'>Welcome to my ChatApp!</h1>
            <div className="form-subtitle">Set your username and the room that you want to join to get started!</div>

            <Row>
                <Col sm={12}>
                    <Form.Group>
                        <Form.Control
                            className='my-3' 
                            placeholder='Username'
                            onChange={e => setUsername(e.target.value)} />

                        <Form.Control placeholder='ChatRoom'
                            onChange={e => setChatroom(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col sm={12}>
                    <hr className='line'/>
                    {/* <Button type='submit'>Join</Button> */}   
                    <button className="auth-button" type="submit">
                        Join
                    </button>
                </Col>
            </Row>
        </Form>
    );
}

export default Lobby;
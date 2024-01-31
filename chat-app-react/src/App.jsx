import { Col, Row, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lobby from './components/Lobby';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './components/ChatRoom';

function App() {
  const[connection, setConnection] = useState();
  const[messages, setMessages] = useState([]);
  const[users, setUsers] = useState([]);

  const joinChatRoom = async (username, chatroom) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5111/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages(messages => [...messages, {username, msg}])
      })

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      })

      connection.onclose(e => {
        setConnection();
        setMessages([]);
        setUsers([]);
      })

      await connection.start();
      await connection.invoke("JoinSpecificChatRoom", {username, chatroom});
      setConnection(connection);
    } catch(e) {
      console.log(e)
    }
  }

  const sendMessage = async(message) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e)
    }
  }

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      
    }
  }

  return (
    <div className='background'>
      <main>
        <Container>
          {/* <Row className="px-5 my-5">
            <Col>
              <h1 className='form-title'>Welcome to my ChatApp!</h1>
            </Col>
          </Row>          
          <hr className='line'/> */}
          {!connection  
            ? <Lobby joinChatRoom={ joinChatRoom }></Lobby>
            : <ChatRoom messages={messages} sendMessage={sendMessage} users={users} closeConnection={closeConnection}></ChatRoom>
          }
        </Container>
      </main>
    </div>
  );
}

export default App;

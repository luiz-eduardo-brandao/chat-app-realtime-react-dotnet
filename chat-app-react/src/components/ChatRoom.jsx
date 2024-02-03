import { Row, Col, Button} from 'react-bootstrap'
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';
import '../index.css';
import ConnectedUsers from './ConnectedUsers';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ChatRoom = ({messages, sendMessage, users, closeConnection, username, chatroom}) => {
    return (
        <div>
            <h1 className='chat-room-title'>Enjoy your chat!</h1>
            <div>
                <ConnectedUsers users={users} chatroom={chatroom} />
            </div>
            <div className='leave-room'>
                <Button onClick={() => closeConnection()} variant='outline-danger'><ArrowBackIosIcon /></Button>
                <h1 className='chat-room-name'>{username}</h1>
            </div>
            <div className='chat'>
                <MessageContainer messages={messages} username={username} />
                <SendMessageForm sendMessage={sendMessage} />
            </div>
        </div>   
    )

}

export default ChatRoom;
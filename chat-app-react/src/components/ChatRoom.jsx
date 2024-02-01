import { Row, Col, Button} from 'react-bootstrap'
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';
import '../index.css';
import ConnectedUsers from './ConnectedUsers';

const ChatRoom = ({messages, sendMessage, users, closeConnection}) => {
    return (
        <div>
            <div>
                <ConnectedUsers users={users} />
            </div>
            <div className='leave-room'>
                <Button onClick={() => closeConnection()} variant='danger'>Leave Room</Button>
            </div>
            <div className='chat'>
                <MessageContainer messages={messages} />
                <SendMessageForm sendMessage={sendMessage} />
            </div>
        </div>   
    )

}

export default ChatRoom;
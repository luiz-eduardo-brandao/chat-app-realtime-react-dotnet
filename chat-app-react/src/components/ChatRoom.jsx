import { Row, Col, Button} from 'react-bootstrap'
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';
import '../index.css';
import ConnectedUsers from './ConnectedUsers';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ChatHeader from './ChatHeader';

const ChatRoom = ({messages, sendMessage, users, closeConnection}) => {
    return (
        <div>
            <div>
                <ConnectedUsers users={users} />
            </div>
            <div className='leave-room'>
                <Button onClick={() => closeConnection()} variant='outline-danger'><ArrowBackIosIcon /></Button>
            </div>
            {/* <ChatHeader /> */}
            <div className='chat'>
                <MessageContainer messages={messages} />
                <SendMessageForm sendMessage={sendMessage} />
            </div>
        </div>   
    )

}

export default ChatRoom;
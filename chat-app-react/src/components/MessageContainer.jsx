import { useEffect, useRef } from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';


const MessageContainer = ({messages}) => {
    const messageRef = useRef();

    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current
            messageRef.current.scrollTo({
                left: 0,
                top: scrollHeight - clientHeight,
                behavior: 'smooth'
            })
        }
    }, [messages])

    return (
        <div ref={messageRef} className="message-container">
            { messages.map((m, index) => 
                !m.msg.includes('joined') 
                ?
                <div key={index} className={index % 2 == 0 ? 'user-message' : 'user-message-left'}>
                    <Chip icon={<FaceIcon />} color="primary" label={m.msg} />
                    <div className="from-user">{m.username}</div>
                </div>               
                : <div className="message-joined">{m.msg}</div>
            )}
        </div>
    )
}
   
export default MessageContainer;
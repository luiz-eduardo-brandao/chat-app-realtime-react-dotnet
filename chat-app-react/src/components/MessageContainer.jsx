import { useEffect, useRef } from "react";

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
                <div key={index} className={index % 2 == 0 ? 'user-message' : 'user-message-left'}>
                    <div className="message bg-primary">{m.msg}</div>
                    <div className="from-user">{m.username}</div>
                </div>               
            )}
        </div>
    )
}
   
export default MessageContainer;
import { useEffect, useRef } from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';


const MessageContainer = ({messages, username}) => {
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

    var objToday = new Date(),
        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
        dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
        curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

    var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;


    const sameUser = (index, username) => {
        console.log('messages: ', messages)
        console.log('index: ', index)
        console.log('username: ', username)

       if(index != null && index > 0) {
            let currentUser = messages[index]
            let lastUser = messages[index - 1]

            if (!lastUser) return true

            if (lastUser.username == 'admin' && currentUser.username == username) {
                return true
            }

            if (currentUser.username == username) return true;

            return false;

            // console.log('else lastUser: ', lastUser)
            // console.log('else currentUser: ', currentUser)
            // console.log('else username: ', username)

            // if (lastUser.username != username) return true
            // else return false

            // return lastUser.username == username
            
       }

       return true
    }

    return (
        <div ref={messageRef} className="message-container">
            <div className="message-date mb-2">{today}</div>
            { messages.map((m, index) => 
                !m.msg.includes('joined') 
                ?<div key={index} className={sameUser(index, username) ? 'user-message' : 'user-message-left'}>
                    {/* <Chip 
                        icon={<FaceIcon />} 
                        label={m.msg}
                        color="primary" 
                        sx={{
                            height: '50px',
                            width: '90px',
                            '& .MuiChip-label': {
                              display: 'block',
                              whiteSpace: 'normal',
                            },
                          }}
                    /> */}
                    <div className="message">
                        {m.msg}
                    </div>
                    <div className="from-user mx-2">{m.username}</div>
                </div>               
                : <div className="message-joined">{m.msg}</div>
            )}
        </div>
    )
}
   
export default MessageContainer;
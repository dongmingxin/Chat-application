import React from 'react';
import ScrollToButtom from 'react-scroll-to-bottom';
import Message from './Message/message';
import '../../style/messages.scss';
const Messages = (props) => {
    return (
        <ScrollToButtom className="messagesContainer">
            {props.messages.map((message,i) => (
            <div className="messageContainer" key={i}>
                <Message 
                message = {message}
                />
            </div>
                ))} 
        </ScrollToButtom>
     );
}
 
export default Messages;
import React from 'react';
import ChatBot from '../../../icons/chatbot.png';
import Avatar from '../../../icons/avatar.png';
import '../../../style/message.scss';

const Message = (props) => {
    const trimmedName = props.message.user.replace(' ','').toLowerCase();

    console.log(props)
    console.log(trimmedName)

    return (
        <div className="message">
            <div className="message__avatar-wrapper">
                {props.message.user=== 'Chat Bot' ? (
                    <img src={ChatBot} className="message__avatar" alt="chatBot"/>
                ) : (
                    <img src={Avatar} className="message__avatar" alt="avatar"/>
                )}
            </div>
            <div className="message__text">
                <div className="message__text--user">
                    {props.message.user}
                </div>
                <div className="message__text--text">
                    {props.message.text}
                </div>
            </div> 
        </div>
     );
}
 
export default Message;
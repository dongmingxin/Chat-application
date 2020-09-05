import React from 'react';
import './message.scss';

const Message = ({ message, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(message.user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return ( 
        isSentByCurrentUser
        ? (
            <div className="textContainer">
                <div>
                    <p>{`${message.user}:`}</p>
                </div>
                <div>
                    <p>{message.text}</p>
                </div>
            </div>
        )
        : (
            <div className="textContainer">
                <div>
                    <p>{`${message.user}:`}</p>
                </div>
                <div>
                    <p>{message.text}</p>
                </div>
        </div>
        )
     );
}
 
export default Message;
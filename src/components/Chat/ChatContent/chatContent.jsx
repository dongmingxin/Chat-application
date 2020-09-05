import React from 'react';
import ChatRoom from './ChatRoom/chatRoom';
import Messages from './Messages/messages';
import '../style/chatContent.scss';

const ChatContent = ({messages, name, usersInRoom}) => {
    return ( 
        <div className="chatContentContainer">
            <ChatRoom 
            usersInRoom={usersInRoom}
            />
            <Messages 
            messages={messages}
            name={name}
            />
        </div>
     );
}
 
export default ChatContent;
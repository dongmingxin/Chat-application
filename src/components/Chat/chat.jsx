import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import TopBar from './TopBar/topBar';
import ChatContent from './ChatContent/chatContent'; 
import Input from './Input/input';
import './style/chat.scss';

let socket;

const Chat = (props) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState(' ');
    const [usersInRoom, setUsersInRoom] = useState([]);
    const ENDPOINT = 'localhost:3001';
    useEffect(() => {
        const { name, room } = queryString.parse(props.location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        
        socket.emit('join', { name, room }, (error)=> {
            if(error) {
                alert(error);
            }
        });

        // return () => {
        //     socket.emit('disconnect');
        //     socket.off();
        // }
    }, [ENDPOINT, props.location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        });
        socket.on('roomUsers', (users) => {
            setUsersInRoom(users)
        })
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    const handleInputChange = (event) => {
        setMessage(event.target.value)
    }

    return ( 
        <div className="outerContainer">
            <div className="chatContainer">
                <TopBar room={room}/>
                <ChatContent
                    messages={messages}
                    name={name}
                    usersInRoom={usersInRoom}
                />
                <Input 
                message={message}
                handleInputChange={handleInputChange}
                sendMessage={sendMessage}
                />
            </div>
        </div>
                // <div className="chatContainer">
                //     <div className="chat">
                //         <Message messages={messages} name={name}/>
                //     </div>
                //     <div className="message">
                //         <input 
                //         type="text" 
                //         value={message}
                //         onChange={(event) => setMessage(event.target.value)}
                //         onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                //         />
                //         <button onClick={(event) => sendMessage(event)}>Send</button>
                //     </div>
                //     <div>
                //         <a href="/">Close</a>
                //     </div>
                // </div>
        
     );
}
 
export default Chat;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './join.scss';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return ( 
    <div className="outerContainer">
        <div className="container">
            <select onChange={(event) => setRoom(event.target.value)}>
                <option value="">Select Room</option>
                <option value="collaborationearth">Collaboration Earth</option>
                <option value="otherchannel">Other Channel</option>
            </select>
            <input type="text" onChange={(event) => setName(event.target.value)}/>
            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button>Join</button>
            </Link>
        </div>
    </div>
     );
}
 
export default Join;
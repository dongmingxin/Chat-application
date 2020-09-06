import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import './style/join.scss';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [newRoom, setNewRoom] = useState('');
    const [newRooms, setNewRooms] = useState([])

    const handleAddRoom = () => {
        setNewRooms((newRooms)=>[...newRooms, newRoom]);
        setNewRoom('');
    }

    const displayError = (event) => {
        event.preventDefault(); 
        alert('Room or Name Cannot be Empty');
    }

    return ( 
    <div className="joinOuterContainer">
        <div className="joinContainer">
            <div className="join">
                <div className="join__iconWrapper">
                    <PeopleAltIcon className="join__icon"/>
                </div>
                <select onChange={(event) => setRoom(event.target.value)} className="join__select">
                    <option value="">Select Room</option>
                    <option value="collaborationearth">Collaboration Earth</option>
                    <option value="otherchannel">Other Channel</option>
                    {newRooms && newRooms.map((r,i) => (
                        <option key={i} value={r.trim().toLowerCase()}>{r}</option>
                    ))}
                </select>
                <input 
                className="join__input" 
                type="text"
                placeholder="Enter Your Name" 
                onChange={(event) => setName(event.target.value)}
                />
                <Link onClick={event => (!name || !room) ? displayError(event): null} to={`/chat?name=${name}&room=${room}`} className="join__button">
                    <Button 
                        variant="contained" 
                        fullWidth
                        color="primary"
                        >
                        Join
                    </Button>
                </Link>
                <div className="join__or">
                    <div className="join__or--line"></div>
                    <div className="join__or--text">or</div>
                    <div className="join__or--line"></div>
                </div>
                <input 
                className="join__createRoom" 
                type="text"
                value={newRoom}
                placeholder="Create A New Room" 
                onChange={(event) => setNewRoom(event.target.value)}
                />
                <div className="join__createButton">
                    <Button 
                        variant="contained" 
                        fullWidth
                        color="primary"
                        onClick={handleAddRoom}
                        >
                        Create
                    </Button>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Join;
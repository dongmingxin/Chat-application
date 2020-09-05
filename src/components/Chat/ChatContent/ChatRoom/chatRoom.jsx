import React from 'react';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import PersonIcon from '@material-ui/icons/Person';
import '../../style/chatRoom.scss';


const ChatRoom = ({usersInRoom}) => {
    return ( 
        <div className="chatRoom">
            <div className="chatRoom__title">
                <div className="chatRoom__title--icon-wrapper">
                    <PeopleAltSharpIcon fontSize="large" className="chatRoom__title--icon"/>
                </div>
                <div className="chatRoom__title--text">Joined Users</div>
            </div>
            <div className = "chatRoom__users-list">
                {usersInRoom.users && usersInRoom.users.map((user) => (
                    <div key={user.id} className="chatRoom__users-list--user"><PersonIcon className="chatRoom__users-list--icon"/>{user.name.toUpperCase()}</div>
                ))}
            </div>
        </div>
     );
}
 
export default ChatRoom;
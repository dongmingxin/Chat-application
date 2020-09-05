import React from 'react';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import '../style/topBar.scss';


const TopBar = (props) => {
    return ( 
        <div className="topBar">
            <div className="topBar__room">
                <div className="topBar__room--icon-wrapper">
                    <QuestionAnswerRoundedIcon fontSize="large" className="topBar__room--icon"/>
                </div>
                <div className="topBar__room--name">{props.room.toUpperCase()}</div>
            </div>
            <div className="topBar__leave">
                <a href="/"><button className="topBar__leave--button">Leave Room</button></a>
            </div>
        </div>
     );
}
 
export default TopBar;
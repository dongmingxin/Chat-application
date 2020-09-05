import React from 'react';
import '../style/input.scss';

const Input = (props) => {
    return ( 
        <div className="input">
            <input 
            type="text" 
            className="input__field"
            value={props.message}
            onChange={(event) => props.handleInputChange(event)}
            onKeyPress={event => event.key === 'Enter' ? props.sendMessage(event) : null}
            />
            <button 
            className="input__button"
            onClick={event => props.sendMessage(event)}
            >Send</button>
        </div>
     );
}
 
export default Input;
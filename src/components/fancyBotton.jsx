import React from 'react';

const FancyButton = (props) => {
    return (
        <div>
        <button>{props.children}</button>
        {props.haha}
        </div> 
     );
}
 
export default FancyButton;
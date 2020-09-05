import React from 'react';
import Message from '../Message/message';

import ScrollToButtom from 'react-scroll-to-bottom';

const Messages = (props) => {
    return ( 
        <ScrollToButtom>
        <div className="messagesContainer">
            {/* {messages.map((message, i) => <div key={i}><Message message={props.message} name={props.name}/></div>)} */}
        </div>
        </ScrollToButtom>
     );
}
 
export default Messages;
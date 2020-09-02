import React, { Component } from 'react';
import FancyButton from './fancyBotton';

class Main extends Component {
    state = {  }

    haha = () => {
        return (
            <div>
                <h3>haha</h3>
            </div>
        )
    }

    render() { 
        return (
            <div> 
            <div>This is the main page</div>
            <FancyButton haha={this.haha()}>Big</FancyButton>
            </div>
         );
    }
}
 
export default Main;
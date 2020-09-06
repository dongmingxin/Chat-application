import React from 'react';
import Join from '../Join/join';
import Chat from '../Chat/chat';
import Login from '../login/login';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/join" component={Join}/>
      <Route path="/chat" component={Chat} />
    </Switch>
  );
}

export default App;

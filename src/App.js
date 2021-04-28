import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Dashboard from './containers/Dashboard/Dashboard';
import Login from './containers/Login/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App'
import HappinessForm from './components/HappinessForm';
import Signup from './components/Signup';
import Login from './components/Login'

export default function Routes() {
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/HappinessForm" component={HappinessForm} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Router>
    )
}
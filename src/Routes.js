import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App'
import HappinessForm from './components/HappinessForm';

export default function Routes() {
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/HappinessForm" component={HappinessForm} />
        </Switch>
      </Router>
    )
}
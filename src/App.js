import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';

import HappinessForm from './components/happinessForm';
import './App.css';



class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1> Welcome to the mindful app.</h1>
          <h3>Take our 25 questions free mindful assessment now!</h3>
          <Link to='/HappinessForm'>
            <button type="submit"> Submit </button>
          </Link>
        </header>
      </div>
    );
  }
}

export default App;

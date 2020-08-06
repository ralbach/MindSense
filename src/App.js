import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';

import HappinessForm from './components/HappinessForm';
import NavBar from './components/NavBar';
import './App.css';



class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <h1> Welcome to Mindsense.me.</h1>
          <h3>Take our free Mindsense assessment now!</h3>
          <Link to='/HappinessForm'>
            <button id="survey" type="submit"> Find Happiness </button>
          </Link>
        </header>
      </div>
    );
  }
}

export default App;

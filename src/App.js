import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import './App.sass';

import Nav from './components/nav';
import Othernav from './components/othernav';
import Main from './components/main';


class App extends Component {
  render() {
    return (
      <div>
      	<Nav/>
      	<Othernav/>
      	<Main />
      </div>
    )
  }
}

export default App;

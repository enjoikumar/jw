import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import './App.sass';

import Nav from './components/nav';
import Othernav from './components/othernav';
import Main from './components/main';
import Center from './components/center'

class App extends Component {
  render() {
    return (
      <div>
      	<Nav/>
      	<Othernav/>
      	<Main />
      	<Center/>
      </div>
    )
  }
}

export default App;

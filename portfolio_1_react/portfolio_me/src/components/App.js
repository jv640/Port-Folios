import React, { Component } from 'react';
import './App.css';
import { Portfolio } from './portfolio/Portfolio';

export class App extends Component {
  constructor () {
    super();

    this.state = {
      selectedSection : ""
    };
  }
  
  handleSectionClick = (sectionName) => {
    alert(sectionName);
  }

  render () {
    return (
      <div className = "App">
        <Portfolio 
            handleSectionClick = {this.handleSectionClick}/>
      </div>
    ); 
  }
}

export default App;
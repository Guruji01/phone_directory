import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="component-body-container">

          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
          </div>

          <div className="grid-container">
          <span className="grid-item">Pihu</span>
          <span className="grid-item">8219432884</span>
          </div>

          <div className="grid-container">
          <span className="grid-item">Jack</span>
          <span className="grid-item">9017924441</span>
          </div>


          </div>
          </div>
    );
    }
}
export default App;
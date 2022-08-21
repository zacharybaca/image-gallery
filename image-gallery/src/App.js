import React, { Component } from 'react';
import './index.css';
import Form from './components/Form';
import apiKey from './config';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Form />
      </div>
    );
  }
  
}

export default App;

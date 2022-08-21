import React, { Component } from 'react';
import './index.css';
import Form from './components/Form';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Form />
        <Nav />
        <PhotoContainer />
      </div>
    );
  }
  
}

export default App;

import React, { Component } from 'react';
import './index.css';
import Form from './components/Form';
import PhotoContainer from './components/PhotoContainer';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import apiKey from './config';



class App extends Component {
  constructor() {
    super();
    this.state = {
      photo: ''
    }
  }
  render() {
    return (
      <div className="container">
        <Form />
        <Nav />
        <PhotoContainer />
        <NotFound />
      </div>
    );
  }
  
}

export default App;

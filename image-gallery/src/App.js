import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Switch
} from 'react-router-dom';

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
      pics: [],
      cats: [],
      dogs: [],
      birds: [],
      query: '',
      loading: true
    };
  }

  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Form />
          <Nav />
          <Routes>
            <PhotoContainer />
            <NotFound />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;

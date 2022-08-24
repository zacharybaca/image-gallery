import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
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

  componentDidMount() {
    this.search('cats');
    this.search('dogs');
    this.search('birds');
    this.search(this.state.query);
  }

  search = (query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then(data => {
      console.log(data.photos.photo)
      if(query === 'cats') {
        this.setState({
          cats: data.photos.photo,
          loading: false
        });
      } else if(query === 'dogs') {
        this.setState({
          dogs: data.photos.photo,
          loading: false
        });
      } else if(query === 'birds'){
        this.setState({
          birds: data.photos.photo,
          loading: false
        });
      } else {
        this.setState({
          pics: data.photos.photo,
          query: query,
          loading: false
        });
      }
    })
    .catch(error => {
      console.log('An Error Occurred', error);
    });
  }

  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Form search={this.search}/>
          <Nav />
          <Switch>
            <Route path="/cats" render={() => <PhotoContainer data={this.state.cats} />} />
            <Route path="/dogs" render={() => <PhotoContainer data={this.state.dogs} />} />
            <Route path="/birds" render={() => <PhotoContainer data={this.state.birds} />} />
            <Route path="/:query" render={() => <PhotoContainer data={this.state.pics} query={this.state.query} search={this.search} />} />
            <Route exact path="/" render={() => <PhotoContainer data={this.state.pics} /> } />
            <Route render={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;

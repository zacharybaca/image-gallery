import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import '../index.css';

class PhotoContainer extends Component {
    constructor() {
        super();
        this.state = {
            photo: ''
        }
    }
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                    <Photo />
                    <NotFound />
            </div>
        )
    }
}

export default PhotoContainer;
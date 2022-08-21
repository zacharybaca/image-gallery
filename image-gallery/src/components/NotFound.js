import React, { Component } from 'react';
import '../index.css';

class NotFound extends Component {
    render() {
        return (
            <ul>
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
        )
    }
}

export default NotFound;
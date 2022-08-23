import React from 'react';
import {useParams} from 'react-router-dom';
import Photo from './Photo';
import NotFound from './NotFound';
import '../index.css';

const PhotoContainer = (props) => {
    
        const results = props.data;
        let pics;

        const { query } = useParams();

        if (props.query !== query) {
            props.performSearch(query);
        }

        if (results.length > 0) {
            pics = results.map(pic => <Photo url={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} />)
        } else {
            pics = <NotFound />
        }
        return (
            <div className="photo-container">
                <h2>Results</h2>
                    <ul>
                        { pics }
                    </ul>
            </div>
        )
}

export default PhotoContainer;
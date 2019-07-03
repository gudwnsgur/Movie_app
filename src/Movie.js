import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired 
    }

    render () {
        // console.log(this.props);
        return (
        <div>
            <MoviePoster poster={this.props.poster}/>
            <h1>{this.props.title}</h1>
        </div>
        );
    }
}

class MoviePoster extends Component {

    static propTypes = {
        poster : PropTypes.string.isRequired
    }

    render () {
        return (
            <img src={this.props.poster} />
        );
    }
}

export default Movie;

import React  from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie ({title, poster, genres, synopsis}) {
    return (
        <div className ="Movie" >
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genre">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis"> 
                    {synopsis}
                </p>
            </div>
        </div>
    )
}
 // <LinesEllipsis text={synopsis} maxLine= '3' ellipsis = '...' trimRight basedOn = 'letters' />
 // can not use lines-ellipse. I have to use yarn, not npm 

function MoviePoster ({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}   // functional component 

function MovieGenre({genre}) {
    return (
        <span classname="Movie_Genre">{genre} </span>
    )
}


Movie.propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres : PropTypes.array.isRequired,
        synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}
MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

export default Movie;
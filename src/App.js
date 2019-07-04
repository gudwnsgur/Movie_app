import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // componentWillMount() {}
    /*
    setTimeout(() => {
      this.setState ({
        movies : [
          {
            title : "Iron Man",
            poster : "https://upload.wikimedia.org/wikipedia/en/7/70/Ironmanposter.JPG"
          },
          {
            title : "Thor",
            poster : "https://upload.wikimedia.org/wikipedia/en/f/fc/Thor_poster.jpg"
          },
          {
            title : "Spider Man",
            poster : "https://images-na.ssl-images-amazon.com/images/I/71ZKGZ0fWfL._SY606_.jpg"
          },
          {
            title : "Doctor Strange",
            poster : "https://images-na.ssl-images-amazon.com/images/I/61yHlaxjkgL.jpg"
          },
          {
            title : "Captain America",
            poster : "https://images-na.ssl-images-amazon.com/images/I/71krfsS5kNL._SY679_.jpg"
          }
        ]
      })
    }, 5000)
  */

  state = {}

  componentDidMount () {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title_english}
                    poster={movie.medium_cover_image} key={movie.id}
                    genres={movie.genres} 
                    synopsis={movie.synopsis}  />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callAPi()
    this.setState({ movies })
  } // async it doesn't have to finish so the next work can start

  _callAPi = () => {
   return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
   .then(alpha => alpha.json())
   .then(json => json.data.movies)
   .catch(err => console.log(err))
  }

  render () {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading" }>   
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;

// render() {} ->  return ()  | props | map | prop-types | life-cycle | state

// lifecycle : (1) componentWillMount() -> (2) render() -> (3) componentDidMount() 
// update : componentWillErceiveProps() -> shouldComponentUpdate() -> componentWillUpdate()
//          -> render() -> component

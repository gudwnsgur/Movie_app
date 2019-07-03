import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // componentWillMount() {}
  state = {
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
      }
    ]
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState ({
        movies : [
          ...this.state.movies, {
            title : "Captain America",
            poster : "https://images-na.ssl-images-amazon.com/images/I/71krfsS5kNL._SY679_.jpg"
          }
        ]
      })
    }, 3000);
  }

  render () {
  return (
    <div className="App">
      {this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/> 
      })}
    </div>
  );
}

}


export default App;
// render->return | props | map | prop-types | life-cycle | state

// lifecycle : (1) componentWillMount() -> (2) render() -> (3) componentDidMount() 
// update : componentWillErceiveProps() -> shouldComponentUpdate() -> componentWillUpdate()
//          -> render() -> component

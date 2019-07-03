import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Iron Man",
  "Thor",
  "Spider-Man",
  "Doctor Strange"
]
const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/7/70/Ironmanposter.JPG",
  "https://upload.wikimedia.org/wikipedia/en/f/fc/Thor_poster.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71ZKGZ0fWfL._SY606_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/61yHlaxjkgL.jpg"
]

function App() {
  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/>
      <Movie title={movieTitles[2]} poster={movieImages[2]}/>
      <Movie title={movieTitles[3]} poster={movieImages[3]}/>
    </div>
  );
}


export default App;

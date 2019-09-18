import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';


const movies = [
  {
    title: "Matrix",
    poster: "https://cdn.shopify.com/s/files/1/1416/8662/products/matrix_1999_french_1p_original_film_art_2000x.jpg?v=1551787103",
  },
  {
    title: "Full Metal Jacket",
    poster: "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._AC_SY879_.jpg",
  },
  {
    title: "Old Boy",
    poster: "http://cfs9.tistory.com/upload_control/download.blog?fhandle=YmxvZzE2Mjc1N0BmczkudGlzdG9yeS5jb206L2F0dGFjaC8wLzMuanBn",
  },
  {
    title: "Star Wars",
    poster: "https://cdn.europosters.eu/image/1300/posters/star-wars-the-last-jedi-red-montage-i50033.jpg  "
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;

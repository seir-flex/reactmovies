import { useState } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
	const [movie, setMovie] = useState(null);
  const apiKey = '98e3fb1f';

  // function to fetch movie data
  // searchTerm is formData from Form.js
  const getMovie = async (searchTerm) => {
    // make the fetch request and store results in response
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
    // parse the returned JSON 
    const data = await response.json()
    setMovie(data)
  }

  console.log('App - movie', movie)

  // everything in this return is JSX..js & xml
	return (
		<div className='App'>
			{/* pass the getMovie function to MovieDisplay */}
			<Form  movieSearch={getMovie} />
			<MovieDisplay movie={movie}/>
		</div>
	);
}

export default App;

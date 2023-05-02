// props = {movie: {Title: 'Star Wars'}}
const MovieDisplay = ({movie}) => {
    // JSX can only return a single parent but it can have as many children as needed
	return (
		<div>
			<h1>{movie.Title}</h1>
			<h2>{movie.Genre}</h2>
			<img src={movie.Poster} alt={movie.Title} />
			<h2>{movie.Year}</h2>
		</div>
	);
};

export default MovieDisplay;

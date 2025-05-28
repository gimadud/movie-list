import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './MovieCard.css';
import { Movie } from '../types/movie';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);


  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {setMovies(data.results);})
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card-container">
      {movies.map(movie => (
        <MovieCard key={movie.id} movieData={movie} />
    ))}
    </div>
  );
}

export default MovieList;
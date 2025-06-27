import { useQuery } from '@tanstack/react-query';
import MovieCard from './MovieCard';
import './MovieCard.css';
import { Movie } from '../types/movie';

const fetchPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER}`,
    },
  });

  if (!res.ok) {
    throw new Error('영화를 가져오는 데 실패');
  }

  const data = await res.json();
  return data.results;
};

const MovieList: React.FC = () => {
  const { data: movies } = useQuery<Movie[]>({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
    suspense: true, 
  });

  return (
    <div className="card-container">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movieData={movie} />
      ))}
    </div>
  );
};

export default MovieList;

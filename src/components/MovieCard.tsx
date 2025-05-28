import { useState } from 'react';
import MovieModal from './MovieModal';
import './MovieCard.css';
import { MovieProps } from '../types/movie';



function MovieCard({movieData}: MovieProps) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(movieData);

  const imageUrl = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        <div className="whole">
          <div className="movie-cards">
            <img src={imageUrl} alt={movieData.title} />
            <div className="movie-card">
              <p className="title">{movieData.title}</p>
              <p className="rate">⭐ {movieData.vote_average}</p>
            </div>
        </div>
      </div>
    </div>

      {isOpen && (
          <MovieModal
            movieData={movieData}
            onClose={() => setIsOpen(false)}
          />
        )}
    </>
  );
}

export default MovieCard;
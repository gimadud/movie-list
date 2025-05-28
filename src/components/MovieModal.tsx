import './MovieModal.css';
import { MovieModalProps } from '../types/movie';

function MovieModal({ movieData, onClose }: MovieModalProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{movieData.title}</h2>
          <button onClick={onClose}>닫기</button>
          </div>
        
            <div className = "modal-info">
              <img src={imageUrl} alt={movieData.title}/>
              <p>{movieData.overview}</p>
            </div>
      </div>
    </div>
  );
}

export default MovieModal;

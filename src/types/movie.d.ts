// src/types/movie.d.ts

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  [key: string]: any; // 혹시 모르는 필드 대비용
};

export type MovieProps = {
  movieData: Movie;
};

export type MovieModalProps = {
  movieData: Movie;
  onClose: () => void;
};

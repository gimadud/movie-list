import MovieList from './components/MovieList'
import Header from './components/Header';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <MovieList />
      </main>
      <footer></footer>
    </>
  );
}

export default App;

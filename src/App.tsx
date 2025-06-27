import MovieList from './components/MovieList'
import Header from './components/Header';
import React, { Suspense, lazy } from 'react';

const LazyMovieList = lazy(() => import('./components/MovieList'));

const App: React.FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<p style={{ color: 'white' }}>로딩 중입니다...</p>}>
  <LazyMovieList />
</Suspense>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

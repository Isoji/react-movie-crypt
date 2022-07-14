import { React, useState, useEffect } from 'react';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import SearchBar from './components/SearchBar/SearchBar';



const App = () => {
    const [movies, setMovies] = useState('');

    return (
        <>
        <Header />
        <SearchBar moviesSetter={setMovies}/>
        <MovieList movies={movies}/>
        </>
    );
}

export default App;
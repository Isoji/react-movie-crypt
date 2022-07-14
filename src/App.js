import { React, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import SearchBar from './components/SearchBar/SearchBar';



const App = () => {
    const [movies, setMovies] = useState('');

    return (
        <>
        <Toaster />
        <Header />
        <SearchBar moviesSetter={setMovies}/>
        <MovieList movies={movies}/>
        </>
    );
}

export default App;
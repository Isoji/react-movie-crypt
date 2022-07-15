import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout/Layout';
import MovieList from './components/MovieList/MovieList';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
    const [movies, setMovies] = useState('');

    return (
        <>
        <Toaster />
        <Layout>
            <SearchBar moviesSetter={setMovies}/>
            <MovieList movies={movies}/>
        </Layout>
        </>
    );
}

export default App;
import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import MovieList from './components/MovieList/MovieList';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
    const [movies, setMovies] = useState('');

    return (
        <>
        <Toaster />
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
            {/*<SearchBar moviesSetter={setMovies} />
            <MovieList movies={movies}/>*/}
            </Routes>
        </Layout>
        </>
    );
}

export default App;
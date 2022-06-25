import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = "https://www.omdbapi.com?apikey=d3960d27";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState(['']);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('shrek');
    }, []);

    return (
        <div className='app'>
            <h1>Movie Crypt</h1>
            <div className='search'>
                <input
                    placeholder='Search'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key == "Enter") {
                            searchMovies(searchText)
                        }
                    }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchText)}
                />
            </div>
            {movies.length > 0 ?
                (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div classname="no-results">
                        <h2>No results found.</h2>
                    </div>
                )}
        </div>
    );
}

export default App;
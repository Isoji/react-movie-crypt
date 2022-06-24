import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = "https://www.omdbapi.com?apikey=d3960d27";

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('shre');
    }, []);

    return (
        <div className='app'>
            <h1>Movie Crypt</h1>

            <div className='search'>
                <input
                    placeholder='Search'
                    value='Shrek'
                    onChange={() => { }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { }}
                />
            </div>
        </div>
    );
}

export default App;
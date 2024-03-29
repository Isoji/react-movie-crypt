import { React, useState } from "react";
import SearchIcon from "./../../assets/search.svg";
import "./SearchBar.scss";

const TMDB_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

const SearchBar = ({ moviesSetter }) => {
  const [searchText, setSearchText] = useState("");

  const searchMovies = async (searchText) => {
    const response = await fetch(`${TMDB_API_URL}&query=${searchText}`);
    const data = await response.json();

    if (data.results) {
      moviesSetter(data.results);
    } else {
      moviesSetter([]);
    }
  };

  return (
    <>
      <div className="search">
        <div className="searchbar">
          <input
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                searchMovies(searchText);
              }
            }}
          />

          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchText)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;

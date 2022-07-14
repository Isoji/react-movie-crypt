import { React, useState, useEffect } from "react";
import SearchIcon from "./../../assets/search.svg";
import "./SearchBar.scss";

const API_URL = `https://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

const SearchBar = ({ moviesSetter }) => {
  const [searchText, setSearchText] = useState("");

  const searchMovies = async (searchText) => {
    const response = await fetch(`${API_URL}&s=${searchText}`);
    const data = await response.json();

    if (data.Search) {
      moviesSetter(data.Search);
    }
  };

  useEffect(() => {
    searchMovies(searchText);
  }, [searchText]);

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

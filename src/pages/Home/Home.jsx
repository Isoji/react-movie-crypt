import React, { useState } from "react";
import "../../pages/Home/Home.scss";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
  const [movies, setMovies] = useState("");

  return (
    <div className="home">
      {movies === "" ? <h1 className="home__message">Movie Crypt</h1> : null}
      <SearchBar moviesSetter={setMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;

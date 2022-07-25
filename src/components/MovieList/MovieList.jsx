import React from "react";
import Movie from "./Movie/Movie";
import "./MovieList.scss";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.length > 0 ? (
        <div className="movielist-container">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      ) : movies === "" ? null : (
        <div className="movielist-empty">
          <h2>No results found.</h2>
        </div>
      )}
    </>
  );
};

export default MovieList;

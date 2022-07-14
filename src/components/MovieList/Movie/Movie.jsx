import React from "react";
import "./Movie.scss";

const Movie = ({ movie }) => {
  return (
    <>
      <div className="moviecard">
        <img
          className="moviecard__image"
          src={movie.Poster}
          alt="movie-poster"
        ></img>
        <div className="moviecard__overlay">
          <p>{movie.Title}</p>
          <a href="/">Buy</a>
        </div>
      </div>
    </>
  );
};

export default Movie;

import React from "react";
import "./Movie.scss";
import toast from "react-hot-toast";

const notify = () => {
  toast("Work in progess..");
};

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
          <a onClick={notify}>Buy</a>
        </div>
      </div>
    </>
  );
};

export default Movie;

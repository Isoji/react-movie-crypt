import React from "react";
import Movie from "./Movie/Movie";
import "./MovieList.scss";

/*const movies = [
    {
        Title: "Starwars: Goretech",
        Year: "2018",
        imdbID: "tt9336300",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg"
    },
    {
        Title: "MeUndies x StarWars: The Dark Side",
        Year: "2018",
        imdbID: "tt9414858",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMzg3ZDcwNDQtOTVlMC00ZjE0LThiYjktY2U2YTVjODU5MWY5XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
    },
]*/

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.length > 0 ? (
        <div className="movielist-container">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="movielist-empty">
          <h2>No results found.</h2>
        </div>
      )}
    </>
  );
};

export default MovieList;

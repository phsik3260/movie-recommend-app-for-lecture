import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <div>
      <Link to={`movie/${movie.id}`}>
        <img src={movie.medium_cover_image} alt={movie.title} />
      </Link>
      <div>
        <Link to={`/movie/${movie.id}`}>
          <h2>{movie.title}</h2>
        </Link>
        <div>{movie.year}</div>
        <div>{movie.rating}</div>
        <ul>
          {movie.genres?.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
          {/* movie에 'genres' property가 있는 경우에만 maping 처리. */}
        </ul>
        <div>{movie.summary}</div>
      </div>
    </div>
  );
};

export default Movie;

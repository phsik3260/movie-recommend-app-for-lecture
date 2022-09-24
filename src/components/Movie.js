import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <div>
        <h2>{movie.title}</h2>
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

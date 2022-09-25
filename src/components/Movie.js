import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";

const Movie = ({ movie }) => {
  return (
    <div className={styles.movie}>
      <Link to={`movie/${movie.id}`}>
        <img
          src={movie.medium_cover_image}
          alt={movie.title}
          className={styles.movie__img}
        />
      </Link>
      <div className={styles.movie__data}>
        <Link to={`/movie/${movie.id}`}>
          <h2 className={styles.movie__data__title}>{movie.title}</h2>
        </Link>
        <div className={styles.movie__data__year}>{movie.year}</div>
        <div className={styles.movie__data__rating}>{movie.rating}/10</div>
        <ul className={styles.movie__data__genres}>
          {movie.genres?.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
          {/* movie에 'genres' property가 있는 경우에만 maping 처리. */}
        </ul>
        <div className={styles.movie__data__summary}>
          {movie.summary.length < 255
            ? movie.summary
            : movie.summary.slice(0, 255) + "..."}
        </div>
      </div>
    </div>
  );
};

export default Movie;

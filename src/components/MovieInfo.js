import React from "react";
import styles from "../styles/MovieInfo.module.css";

const MovieInfo = ({ movie }) => {
  return (
    <div className={styles.movie}>
      <img src={movie.large_cover_image} className={styles.movie__img} />
      <div className={styles.movie__data}>
        <div className={styles.movie__data__title}>{movie.title}</div>
        <div className={styles.movie__data__year}>{movie.year}</div>
        <div className={styles.movie__data__rating}>{movie.rating}/10</div>
        <ul className={styles.movie__data__genres}>
          {movie.genres?.map((genre) => (
            <li id={genre}>{genre}</li>
          ))}
        </ul>
        <div className={styles.movie__data__runtime}>
          {movie.runtime !== 0 ? movie.runtime + "mins" : null}
        </div>
        <div className={styles.movie__data__desc}>
          {movie.description_full || "Sorry, no description."}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;

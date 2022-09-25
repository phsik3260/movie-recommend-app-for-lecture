import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url =
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);
    setTimeout(() => setLoading(false), 1000);
  };

  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Loading text={"get movies..."} />
      ) : (
        <div className={styles.container}>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;

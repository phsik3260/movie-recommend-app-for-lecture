import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url =
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        "get loading..."
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

const App = () => {
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
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <div>
                <h2>{movie.title}</h2>
                <div>{movie.year}</div>
                <div>{movie.rating}</div>
                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
                <div>{movie.summary}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;

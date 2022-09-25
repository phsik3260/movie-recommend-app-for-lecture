import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import MovieInfo from "../components/MovieInfo";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  // Route path로 전달된 동적 url인 id를 가져와 활용한다.

  const getMovie = async () => {
    const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const json = await (await fetch(url)).json();
    setMovie(json.data.movie);
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);

  return (
    <>
      {loading ? (
        <Loading text={"get movie..."} />
      ) : (
        <MovieInfo movie={movie} />
      )}
    </>
  );
};

export default Detail;

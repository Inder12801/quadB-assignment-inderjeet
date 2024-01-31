import React, { useCallback, useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      setMovies(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [movies]);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="home-page">
      <h2 className="movies-heading">Movies</h2>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.show.id} show={movie.show} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

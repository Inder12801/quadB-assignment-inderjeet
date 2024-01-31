import React, { useCallback, useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Optimised Fetching of data using useCallback
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      setMovies(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [movies]);
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Loader />;
  }
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

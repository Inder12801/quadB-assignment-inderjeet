import React, { Children } from "react";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const { show } = props;
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/movie/${show?.id}`, {
      state: show,
    });
  };

  return (
    <div className="movie-card">
      <img
        src={
          show?.image?.medium ||
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
        }
        alt={show?.name}
      />
      <div className="movie-details">
        <h2>{show?.name}</h2>
        <p>
          <strong>Type:</strong> {show?.type}
        </p>
        <p>
          <strong>Language:</strong> {show?.language}
        </p>
        <p>
          <strong>Genres:</strong> {show?.genres?.join(", ")}
        </p>

        <p>
          <strong>Runtime:</strong> {show?.runtime} minutes
        </p>
        <p>
          <strong>Premiered:</strong> {show?.premiered}
        </p>
        <p>
          <strong>Rating:</strong> {show?.rating?.average}
        </p>
        <button type="button" className="btn" onClick={handleRedirect}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

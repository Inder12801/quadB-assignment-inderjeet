import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import BookingFormModal from "../../components/BookingFormModal/BookingFormModal";

const MoviePage = () => {
  const { state: show } = useLocation();
  const [showModal, setShowModal] = useState(false);

  const handleBookTicket = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="movie-page">
      <div className="movie-summary-details">
        <div>
          <img src={show?.image?.medium} alt={show?.name} />
        </div>
        <div>
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
            <strong>Status:</strong> {show?.status}
          </p>
          <p>
            <strong>Runtime:</strong> {show?.runtime} minutes
          </p>
          <p>
            <strong>Premiered:</strong> {show?.premiered}
          </p>
          <p>
            <strong>Ended:</strong> {show?.ended}
          </p>
          <p>
            <strong>Official Site:</strong>{" "}
            <a
              href={show?.officialSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {show?.officialSite}
            </a>
          </p>
          <p>
            <strong>Schedule:</strong> {show?.schedule?.days?.join(", ")} at{" "}
            {show?.schedule?.time}
          </p>
          <p>
            <strong>Average Rating:</strong> {show?.rating?.average}
          </p>

          <button className="btn" variant="primary" onClick={handleBookTicket}>
            Book a Ticket
          </button>
        </div>
      </div>

      {/* Modal for booking ticket */}
      <BookingFormModal
        handleCloseModal={handleCloseModal}
        showModal={showModal}
      />
    </div>
  );
};

export default MoviePage;
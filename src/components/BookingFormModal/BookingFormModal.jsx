import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const BookingFormModal = ({ handleCloseModal, showModal, name }) => {
  const [formData, setFormData] = useState({
    name: name || "",
    email: "",
    numberOfTickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBookNow = () => {
    // Handle booking logic here, you can send the form data to the server, etc.
    console.log("Booking submitted:", formData);
    handleCloseModal(); // Close the modal after booking
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Book Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfTickets">Number of Tickets:</label>
              <input
                type="number"
                className="form-control"
                id="numberOfTickets"
                name="numberOfTickets"
                value={formData.numberOfTickets}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn"
            variant="secondary"
            onClick={handleCloseModal}
          >
            Close
          </Button>
          <Button className="btn" variant="primary" onClick={handleBookNow}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookingFormModal;

import React, { useState } from "react";
import bannerImage from "../../../../../src/assets/img/banner_bg.jpg";
import { Modal, Button, Form } from "react-bootstrap";
import apiClient from "../../../../../src/apiClient"; // Adjust the import path as needed

const HeroSection = ({ appointmentData }) => {
  const [showModal, setShowModal] = useState(false);
  const [service_name, setSelectedService] = useState("");
  const [service_selected, setSelectedDoctor] = useState("");
  const [appointment_date, setSelectedDate] = useState("");
  const [appointment_time, setSelectedTime] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const user_uid = localStorage.getItem("user_uid");

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    setSelectedDoctor(""); // Reset doctor on service change
  };

  const handleBookAppointment = async () => {
    if (
      !service_name ||
      !service_selected ||
      !appointment_date ||
      !appointment_time
    ) {
      setConfirmation("Please fill all fields.");
      return;
    }
    try {
      console.log("Saved token:", localStorage.getItem("token"));
      await apiClient.post("/bookAppointment", {
        service_name: service_name,
        service_selected: service_selected,
        appointment_date: appointment_date,
        appointment_time: appointment_time,
        user_uid: user_uid,
      });
      setConfirmation("Appointment booked successfully!");
      // reset form and close modal after a delay
      setTimeout(() => {
        setShowModal(false);
        setSelectedService("");
        setSelectedDoctor("");
        setSelectedDate("");
        setSelectedTime("");
        setConfirmation("");
      }, 2000);
    } catch (error) {
      setConfirmation(
        error.response?.data?.error || "Failed to book appointment."
      );
    }
  };

  return (
    <div
      className="hero-banner text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold text-black">
              HEALTHIER HABITS,
              <br />
              BETTER LIFE
            </h1>
            <p className="mt-3 text-light">
              Start your journey to better health today. Book appointments,
              access trusted medical information, and connect with our expert
              team—all in one place.
            </p>
            <button
              className="btn btn-primary mt-3"
              onClick={() => {
                const token = localStorage.getItem("token");
                console.log("Token:", token);
                console.log("User UID:", user_uid);
                if (!token) {
                  alert("Please log in to book an appointment.");
                } else {
                  setShowModal(true);
                }
              }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Service</Form.Label>
              <Form.Select value={service_name} onChange={handleServiceChange}>
                <option value="">-- Select Service --</option>
                {Object.keys(appointmentData).map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {service_name && (
              <Form.Group className="mb-3">
                <Form.Label>Select Doctor</Form.Label>
                <Form.Select
                  value={service_selected}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                >
                  <option value="">-- Select Doctor --</option>
                  {appointmentData[service_name].map((doc) => (
                    <option key={doc} value={doc}>
                      {doc}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                value={appointment_date}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Time</Form.Label>
              <Form.Control
                type="time"
                value={appointment_time}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </Form.Group>
          </Form>
          {/* ✅ Confirmation message */}
          {confirmation && (
            <div className="alert alert-info mt-2">{confirmation}</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleBookAppointment}
            disabled={
              !service_name ||
              !service_selected ||
              !appointment_date ||
              !appointment_time
            }
          >
            Book Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HeroSection;

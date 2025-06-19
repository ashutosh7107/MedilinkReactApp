import React, { useEffect, useState } from "react";
import "./AppointmentDetails.css";
import apiClient from "../../../apiClient";

const AppointmentModal = ({ onClose }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    apiClient
      .get("/appointment/getAppointmentDetails")
      .then((res) => {
        console.log("Appointment API Response:", res.data);
        setAppointments(res.data);
      })
      .catch((err) => console.error("Failed to fetch appointments:", err));
  }, []);

  return (
    <div className="modal-backdrop">
      <div
        className="modal-content p-4 bg-white rounded shadow-lg"
        style={{ width: "80%", margin: "auto", marginTop: "5%" }}
      >
        <h3>Your Appointments</h3>
        <button className="btn btn-secondary float-end" onClick={onClose}>
          Close
        </button>
        {appointments.length === 0 ? (
          <p>No appointments booked yet.</p>
        ) : (
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Service Name</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, index) => (
                <tr key={appt.id || index}>
                  <td>{index + 1}</td>
                  <td>{appt.service_name}</td>
                  <td>{appt.service_selected}</td>
                  <td>{appt.appointment_date}</td>
                  <td>{appt.appointment_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;

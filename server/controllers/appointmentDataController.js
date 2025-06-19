const db = require("../config/db");

exports.bookAppointment = (req, res) => {
  const {
    service_name,
    service_selected,
    appointment_date,
    appointment_time,
    user_uid,
  } = req.body;

  console.log("Incoming appointment booking data:");
  console.log("Service:", service_name);
  console.log("Doctor:", service_selected);
  console.log("Date:", appointment_date);
  console.log("Time:", appointment_time);
  console.log("User UID:", user_uid);

  if (
    !service_name ||
    !service_selected ||
    !appointment_date ||
    !appointment_time ||
    !user_uid
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const sql = `
    INSERT INTO appointment_details (service_name, service_selected, appointment_date, appointment_time, user_uid)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      service_name,
      service_selected,
      appointment_date,
      appointment_time,
      user_uid,
    ],
    (err, result) => {
      if (err) {
        console.error("Database Insertion Error:", err);
        return res.status(500).json({ error: "Database error." });
      }
      res.json({ success: true, message: "Appointment booked successfully!" });
    }
  );
};

const db = require("../config/db");

exports.getAppointmentDetails = (req, res) => {
  const sql =
    "SELECT * FROM appointment_details WHERE user_uid = ? ORDER BY created_at DESC";
  db.query(sql, [(user_uid = req.user.user_uid)], (err, results) => {
    console.log(results);
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
};

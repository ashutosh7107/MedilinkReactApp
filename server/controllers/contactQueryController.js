const db = require("../config/db");

exports.submitQuery = (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ error: "All mandatory fields are required." });
  }

  // Save to DB
  db.query(
    "INSERT INTO contact_queries (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)",
    [name, email, phone, subject, message],
    (err) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.json({ success: true, message: "Query submitted successfully" });
    }
  );
};

const express = require("express");
const router = express.Router();
const appointmentData = require("../data/appointmentData"); // wherever your file is
const { authenticateToken } = require("../middleware/authMiddleware");
const { bookAppointment } = require("../controllers/appointmentDataController");

// GET route to return static doctor data
router.get("/", (req, res) => {
  res.json(appointmentData);
});

// POST route to book appointment
router.post("/", authenticateToken, bookAppointment);

module.exports = router;

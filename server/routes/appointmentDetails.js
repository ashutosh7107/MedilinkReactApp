const express = require("express");
const router = express.Router();
const appointmentDetailsController = require("../controllers/appointmentDetailsController");
const { authenticateToken } = require("../middleware/authMiddleware");

router.get(
  "/getAppointmentDetails",
  authenticateToken,
  appointmentDetailsController.getAppointmentDetails
);

module.exports = router;

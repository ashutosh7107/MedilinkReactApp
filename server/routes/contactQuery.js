const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactQueryController");
const { authenticateToken } = require("../middleware/authMiddleware");

router.post("/submit", authenticateToken, contactController.submitQuery);

module.exports = router;

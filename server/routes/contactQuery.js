const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactQueryController");

router.post("/submit", contactController.submitQuery);

module.exports = router;

const express = require("express");
const router = express.Router();
const serviceDataController = require("../controllers/serviceDataController");

router.get("/", serviceDataController.getServices);

module.exports = router;

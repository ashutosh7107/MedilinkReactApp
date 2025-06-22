// server/app.js
require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users");
const serviceDataRoutes = require("./routes/serviceData");
const contactRoutes = require("./routes/contactQuery");
const appointmentRoutes = require("./routes/appointmentData");
const appointmentDetailsRoutes = require("./routes/appointmentDetails");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/services", serviceDataRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/bookAppointment", appointmentRoutes);
app.use("/api/appointment", appointmentDetailsRoutes);
app.use(errorHandler);

module.exports = app;

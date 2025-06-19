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
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Body parser
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
// Middleware to set security headers
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);
app.use("/api/users", userRoutes); // user routes
app.use("/api/services", serviceDataRoutes); // service data routes
app.use("/api/contact", contactRoutes);
app.use("/api/bookAppointment", appointmentRoutes);
app.use("/api/appointment", appointmentDetailsRoutes); // Appointment details route
app.use(errorHandler); // Global error handler

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

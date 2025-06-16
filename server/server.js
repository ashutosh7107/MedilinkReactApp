const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users");
const serviceDataRoutes = require("./routes/serviceData");
const contactRoutes = require("./routes/contactQuery");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Body parser
app.use(cors());
app.use("/api/users", userRoutes); // user routes
app.use("/api/services", serviceDataRoutes); // service data routes
app.use("/api/contact", contactRoutes);
app.use(errorHandler); // Global error handler

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

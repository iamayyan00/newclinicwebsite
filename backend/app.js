
const express = require("express");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Solace Clinic API is running.",
  });
});

module.exports = app;

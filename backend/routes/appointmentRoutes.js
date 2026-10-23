
const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  getSchedule,
} = require("../controllers/appointmentController");

// Get clinic schedule
router.get("/schedule", getSchedule);

// Create a new appointment
router.post("/", createAppointment);

// Get all appointments
router.get("/", getAppointments);

// Get appointment by ID
router.get("/:id", getAppointmentById);

module.exports = router;

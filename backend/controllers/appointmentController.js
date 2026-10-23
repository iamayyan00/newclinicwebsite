
const Appointment = require("../models/Appointment");
const { sendAppointmentSMS } = require("../smsService");

// Clinic OPD schedule
const CLINIC_SCHEDULE = {
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  closedDays: ["Sunday"],
  hours: {
    display: "12:00 PM - 8:00 PM",
    start: "12:00",
    end: "20:00",
  },
};

// GET /api/appointments/schedule
const getSchedule = (req, res) => {
  return res.status(200).json({
    success: true,
    schedule: CLINIC_SCHEDULE,
  });
};

// POST /api/appointments
const createAppointment = async (req, res) => {
  try {
    const appointmentData = req.body;

    // Basic required-field validation
    if (
      !appointmentData.name ||
      !appointmentData.mobile ||
      !appointmentData.appointment_date ||
      !appointmentData.appointment_time
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, mobile number, appointment date and time are required.",
      });
    }

    // Create appointment in MongoDB
    const appointment = await Appointment.create(appointmentData);

    // Send SMS without failing the booking if SMS fails
    if (typeof sendAppointmentSMS === "function") {
      sendAppointmentSMS(appointment).catch((error) => {
        console.error("Appointment SMS notification failed:", error.message);
      });
    }

    return res.status(201).json({
      success: true,
      message: "Appointment booked successfully.",
      appointmentId: appointment.appointmentId || appointment._id,
      appointment,
    });
  } catch (error) {
    console.error("Create appointment error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Invalid appointment data.",
        errors: Object.values(error.errors).map((item) => item.message),
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to book appointment.",
    });
  }
};

// GET /api/appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    console.error("Get appointments error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch appointments.",
    });
  }
};

// GET /api/appointments/:id
const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    // Support MongoDB document ID or custom appointment ID
    let appointment;

    if (/^[0-9a-fA-F]{24}$/.test(id)) {
      appointment = await Appointment.findById(id);
    } else {
      appointment = await Appointment.findOne({
        appointmentId: id,
      });
    }

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    return res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    console.error("Get appointment by ID error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch appointment.",
    });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  getAppointmentById,
  getSchedule,
};

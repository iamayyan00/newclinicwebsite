const mongoose = require('mongoose');
const Appointment = require("../models/Appointment");

const appointmentSchema = new mongoose.Schema(
  {
    appointmentId: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'Patient name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    age: {
      type: Number,
      required: [true, 'Patient age is required'],
      min: [1, 'Age must be at least 1'],
      max: [120, 'Age cannot exceed 120'],
    },
    gender: {
      type: String,
      required: [true, 'Gender is required'],
      enum: {
        values: ['male', 'female', 'other'],
        message: 'Gender must be male, female, or other',
      },
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      trim: true,
      index: true,
      match: [/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: '',
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
      maxlength: [100, 'City cannot exceed 100 characters'],
    },
    appointmentDate: {
      type: Date,
      required: [true, 'Appointment date is required'],
      index: true,
    },
    appointmentTime: {
      type: String,
      required: [true, 'Appointment time is required'],
      trim: true,
    },
    appointmentType: {
      type: String,
      required: [true, 'Appointment type is required'],
      enum: {
        values: ['consultation', 'followup', 'online'],
        message: 'Invalid appointment type',
      },
      default: 'consultation',
    },
    doctor: {
      type: String,
      required: [true, 'Doctor selection is required'],
      trim: true,
      default: 'Dr. Sana Naeemuddin Qureshi',
    },
    problem: {
      type: String,
      required: [true, 'Description of health problem is required'],
      trim: true,
      maxlength: [2000, 'Problem description cannot exceed 2000 characters'],
    },
    previousMedicalHistory: {
      type: String,
      trim: true,
      default: '',
      maxlength: [2000, 'Medical history cannot exceed 2000 characters'],
    },
    currentMedications: {
      type: String,
      trim: true,
      default: '',
      maxlength: [2000, 'Current medications cannot exceed 2000 characters'],
    },
    referral: {
      type: String,
      trim: true,
      default: '',
      maxlength: [200, 'Referral info cannot exceed 200 characters'],
    },
    insurance: {
      type: String,
      trim: true,
      default: '',
      maxlength: [200, 'Insurance info cannot exceed 200 characters'],
    },
    whatsappNotification: {
      type: Boolean,
      default: true,
    },
    emailNotification: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['confirmed', 'cancelled', 'completed'],
      default: 'confirmed',
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for checking duplicate bookings
appointmentSchema.index({ appointmentDate: 1, appointmentTime: 1, mobile: 1 });

module.exports = mongoose.model('Appointment', appointmentSchema);

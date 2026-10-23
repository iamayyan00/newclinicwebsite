import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const appointmentService = {
  // Check backend server health
  checkHealth: async () => {
    const response = await apiClient.get('/health');
    return response.data;
  },

  // Get clinic OPD schedule
  getSchedule: async () => {
    const response = await apiClient.get('/appointments/schedule');
    return response.data;
  },

  // Book a new appointment
  createAppointment: async (appointmentData) => {
    const response = await apiClient.post('/appointments', appointmentData);
    return response.data;
  },

  // Retrieve appointment details by ID and verified mobile
  getAppointmentById: async (appointmentId, mobile) => {
    const response = await apiClient.get(`/appointments/${appointmentId}`, {
      params: { mobile },
    });
    return response.data;
  },

  // Submit contact message
  sendContactMessage: async (messageData) => {
    const response = await apiClient.post('/contact', messageData);
    return response.data;
  },
};

export default appointmentService;

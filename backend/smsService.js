const axios = require("axios");

const normalizeMobile = (mobile) => {
  let number = String(mobile).replace(/\D/g, "");

  if (number.length === 10) {
    number = "91" + number;
  }

  return number;
};

const sendSMS = async (mobile, flowId, variables) => {
  if (!process.env.SMS_AUTH_KEY || !flowId) {
    throw new Error("SMS gateway configuration is missing");
  }

  const response = await axios.post(
    "https://api.msg91.com/api/v5/flow/",
    {
      flow_id: flowId,
      sender: process.env.SMS_SENDER_ID,
      recipients: [
        {
          mobiles: normalizeMobile(mobile),
          ...variables,
        },
      ],
    },
    {
      headers: {
        authkey: process.env.SMS_AUTH_KEY,
        "Content-Type": "application/json",
      },
      timeout: 15000,
    }
  );

  if (response.data?.type === "error") {
    throw new Error("SMS provider rejected the request");
  }

  return response.data;
};

const sendAppointmentSMS = async (appointment) => {
  const date = new Date(appointment.appointmentDate)
    .toLocaleDateString("en-IN", { timeZone: "UTC" });

  const time = String(appointment.appointmentTime);

  const results = await Promise.allSettled([
    sendSMS(
      process.env.CLINIC_NOTIFICATION_NUMBER,
      process.env.MSG91_CLINIC_FLOW_ID,
      {
        VAR1: appointment.name,
        VAR2: appointment.mobile,
        VAR3: date,
        VAR4: time,
        VAR5: String(appointment.appointmentId),
      }
    ),

    sendSMS(
      appointment.mobile,
      process.env.MSG91_PATIENT_FLOW_ID,
      {
        VAR1: appointment.name,
        VAR2: String(appointment.appointmentId),
        VAR3: date,
        VAR4: time,
        VAR5: appointment.doctor || "Clinic Doctor",
      }
    ),
  ]);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`SMS request ${index + 1} accepted`);
    } else {
      console.error(`SMS request ${index + 1} failed`);
    }
  });

  return results;
};

module.exports = { sendAppointmentSMS };
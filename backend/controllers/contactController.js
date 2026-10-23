const ContactMessage = require('../models/ContactMessage');
const validator = require('validator');

exports.sendMessage = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message, urgent } = req.body;

    const errors = {};
    if (!name || !name.trim()) errors.name = 'Full name is required';
    if (!email || !validator.isEmail(email.trim())) errors.email = 'Valid email is required';
    const cleanPhone = phone ? phone.toString().replace(/[^0-9]/g, '') : '';
    if (!cleanPhone || cleanPhone.length !== 10) errors.phone = 'Valid 10-digit phone number is required';
    if (!subject) errors.subject = 'Subject selection is required';
    if (!message || message.trim().length < 5) errors.message = 'Message must be at least 5 characters';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed for contact message',
        errors,
      });
    }

    const newMessage = new ContactMessage({
      name: name.trim(),
      email: email.trim(),
      phone: cleanPhone,
      subject,
      message: message.trim(),
      urgent: !!urgent,
    });

    await newMessage.save();

    return res.status(201).json({
      success: true,
      message: 'Your message has been received. Our clinic team will reach out to you shortly.',
    });
  } catch (err) {
    return next(err);
  }
};

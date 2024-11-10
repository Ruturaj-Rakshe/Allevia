// appointmentController.js
const Appointment = require("../models/appointments");

exports.createAppointment = async (req, res) => {
  // Implementation for creating an appointment
  const patientId = req.user.userId;
  const { doctorId, date, time } = req.body; // Example fields
  try {
    const newAppointment = new Appointment({ patientId, doctorId, date, time });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating appointment", error: err.message });
  }
};

exports.getAppointmentsForPatient = async (req, res) => {
  const patientId = req.params.patientId; // Get patient ID from request parameters
  try {
    const appointments = await Appointment.find({ patientId }).exec();
    if (!appointments || appointments.length === 0) {
      return res
        .status(404)
        .json({ message: "No appointments found for this patient" });
    }
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getAppointmentsForDoctor = async (req, res) => {
  const doctorId = req.user.userId; // Assuming req.user is populated by authentication middleware
  try {
    const appointments = await Appointment.find({ doctor: doctorId })
      .populate("patientId", "name email") // If you want patient info populated
      .exec();

    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ message: "No appointments found for you" });
    }
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

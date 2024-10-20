const express = require("express");
const router = express.Router();
const {
  authMiddleware,
  doctorAuthMiddleWare,
} = require("../Middleware/authMiddleware");
const {
  createAppointment,
  getAppointmentsForPatient,
  getAppointmentsForDoctor, // Import the new controller function
} = require("../controllers/appointmentController");

router.post("/create", authMiddleware, createAppointment);
router.get("/patient/:patientId", authMiddleware, getAppointmentsForPatient);
router.get("/doctor", doctorAuthMiddleWare, getAppointmentsForDoctor); // Add route to get appointments for the logged-in doctor

module.exports = router;

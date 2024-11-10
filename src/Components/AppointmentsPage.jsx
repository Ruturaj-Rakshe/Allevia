import { useEffect, useState } from "react";
import Signin from "../assets/Signin.jpg"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  createAppointment,
  fetchDoctors,
} from "../Services/appointmentService";

const AppointmentPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const doctorList = await fetchDoctors();
        setDoctors(doctorList);
      } catch (error) {
        console.error("Failed to load doctors:", error);
      }
    };

    getDoctors();
  }, []);

  const handleSelect = (e) => {
    const doctorId = e.target.value;
    setSelectedDoctor(doctorId);
    // if (onSelectDoctor) onSelectDoctor(doctorId);
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      console.log(selectedDoctor);
      const response = await createAppointment(
        selectedDoctor,
        date,
        time,
        reason
      );

      // Assuming the server returns a success message
      setMessage("Appointment has been successfully booked!");

      // Redirect to the home page after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(
        "Error booking appointment:",
        error.response?.data || error.message
      );
      setMessage("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 overflow-hidden">
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url(${Signin})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)",
        }}
      />
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-8 text-white">
          Make an Appointment
        </h1>
        <form onSubmit={handleAppointmentSubmit}>
          <div className="mb-6">
            <label className="block text-white mb-2">Choose Doctor</label>
            {/* <input
              type="text"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Doctor's name"
              required
            /> */}
            <select
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              value={selectedDoctor}
              onChange={handleSelect}
            >
              <option value="">Select a Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.name} - {doctor.speciality}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">Appointment Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">Appointment Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">
              Reason for Appointment
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Brief reason for the appointment"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Book Appointment
          </button>
        </form>

        {/* Show success or error message */}
        {message && (
          <p className="mt-4 text-center text-white font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;

import React, { useEffect, useState } from "react";
import { getDoctorAppointments } from "../Services/appointmentService";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getDoctorAppointments();
        console.log("Fetched appointments:", data); // Log the response for debugging

        // Check if the data is an array before setting state
        if (Array.isArray(data)) {
          setAppointments(data);
        } else {
          setError("Unexpected response format.");
        }
      } catch (err) {
        const msg = err.response.data.message;
        setError(msg);
        console.log("Error fetching appointments:", err);
      }
    };

    fetchAppointments();
  }, []);

  if (error) {
    return (
      <div className="text-center mt-24 font-bold text-xl text-black">
        {error}
      </div>
    ); // Display error message if any
  }

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <div key={appointment._id}>
            <h2>{appointment.title}</h2>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Patient: {appointment.patientName}</p>{" "}
            {/* Adjust based on your data structure */}
          </div>
        ))
      ) : (
        <p>No appointments available</p>
      )}
    </div>
  );
};

export default DoctorDashboard;

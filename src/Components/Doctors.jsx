import React from "react";
import { DoctorsData } from "../Constants"; // Assuming DoctorsData is imported correctly
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

const Doctors = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleAppointmentClick = () => {
    navigate("/appointment"); // Assuming '/appointment' is the route for booking an appointment
  };

  return (
    <div className="bg-green-50 py-16">
      <h2 className="text-center text-4xl font-bold text-green-900 mb-12">
        {DoctorsData.heading}
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {DoctorsData.GivenData.map((doctor, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 transform transition duration-500 ease-in-out hover:bg-green-100 hover:shadow-2xl hover:scale-105 cursor-pointer"
            style={{ marginTop: "20px" }} // Adjusted to move cards slightly down
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-40 h-40 rounded-full object-cover mb-4 transition-transform duration-500 ease-in-out"
              style={{ marginTop: "10px" }} // Adjust image margin
            />
            <h3 className="text-xl font-semibold text-green-800">
              {doctor.name}
            </h3>
            <p className="text-green-600">{doctor.speciality}</p>
            {/* "Book an Appointment" button */}
            <span
              className="mt-4 text-green-700 font-semibold hover:text-green-900 transition-colors duration-300 cursor-pointer"
              onClick={handleAppointmentClick} // Navigate to appointment page on click
            >
              Book an Appointment
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;

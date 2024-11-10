import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreateDoctorAccountImg from "../assets/Signin.jpg"; // Import the background image
import { registerDoctor } from "../Services/appointmentService";

const DoctorCreateAccountPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [speciality, setSpeciality] = useState(""); // Field for the doctor's speciality
  const navigate = useNavigate();

  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to create a new doctor account
      const response = await registerDoctor(name, email, password, speciality);

      console.log(response);
      alert("Doctor account created successfully!");

      // Redirect to the doctor's dashboard or sign-in page after account creation
      navigate("/doctor-dashboard");
    } catch (error) {
      console.error(error);
      alert("Error creating account.");
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen text-white">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${CreateDoctorAccountImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)", // Apply blur only to the background image
        }}
      />

      {/* Create Doctor Account Form */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold mb-8 text-white p-4 bg-opacity-70 rounded-lg mx-auto">
          Doctor Create Account
        </h1>
        <form
          onSubmit={handleCreateAccountSubmit}
          className="bg-gray-800 p-12 rounded-lg shadow-lg w-full max-w-md border border-gray-700 bg-opacity-80"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Speciality Field */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Speciality
            </label>
            <input
              type="text"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorCreateAccountPage;

import { useState } from "react";
import Signin from "../assets/Signin.jpg";
import axios from "axios";

const NewAccountPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // New state for role

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          dob,
          email,
          password,
          role, // Send the selected role to the backend
        }
      );

      console.log(response.data);
      alert("Account created successfully!");
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      alert("Error creating account.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 overflow-hidden">
      {/* Blurred background image */}
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

      {/* Sign-Up Form */}
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-8 text-white">
          Create New Account
        </h1>
        <form onSubmit={handleRegisterSubmit}>
          <div className="mb-6">
            <label className="block text-white mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <div className="mb-8">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Create a password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewAccountPage;

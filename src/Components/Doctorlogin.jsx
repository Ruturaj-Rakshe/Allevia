import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SigninBackground from "../assets/Signin.jpg"; // Update with your background image

const DoctorLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleDoctorLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        // Update this API endpoint as necessary
        { email, password }
      );

      localStorage.setItem("token", response.data.token);

      // Assuming the server returns a success message
      setMessage("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/doctor-dashboard"); // Redirect to doctor dashboard after login
      }, 2000);
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url(${SigninBackground})`, // Add your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)",
        }}
      />
      {/* Doctor Login Form */}
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-8 text-white">Doctor Login</h1>
        <form onSubmit={handleDoctorLoginSubmit}>
          <div className="mb-6">
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Login
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

export default DoctorLoginPage;

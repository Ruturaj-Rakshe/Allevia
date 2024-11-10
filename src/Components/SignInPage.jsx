import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../Services/appointmentService";

const SignInPage = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      // Assuming data contains user info and role
      const accountExists = data && data.user; // Check if user exists
      if (accountExists) {
        // Call the onSignIn function only if account exists
        localStorage.setItem("token", data.token);
        onSignIn(data.role, true); // Pass true for accountExists
      } else {
        alert("Account does not exist. Please sign up.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-3xl font-semibold mb-8 text-white">Sign In</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600"
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
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
        >
          Sign In
        </button>
        <div className="mt-4 text-center">
          <p className="text-white">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-400 hover:underline"
            >
              Create New Account
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;

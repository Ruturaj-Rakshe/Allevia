import React, { useEffect, useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./Components/Benefits";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import SignInPage from "./Components/SignInPage";
import Hero from "./Components/Hero";
import AppointmentsPage from "./Components/AppointmentsPage";
import NewAccountPage from "./Components/NewAccountPage";
import AboutUs from "./Components/AboutUs";
import Pricing from "./Components/Pricing";
import StatsPage from "./Components/StatsPage";
import Doctors from "./Components/Doctors";
import ErrorBoundary from "./Components/ErrorBoundary"; // Import ErrorBoundary
import DoctorDashboard from "./Components/Doctordashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [userRole, setUserRole] = useState(null); // Store role (doctor or patient)
  const navigate = useNavigate();

  // Handle Sign-in and navigate based on the selected role
  const handleSignIn = async (role, accountExists) => {
    if (!accountExists) {
      // Redirect to signup if account doesn't exist
      navigate("/signup");
      return;
    }

    setUserRole(role);
    setIsAuthenticated(true);

    // Navigate to home page on successful login
    if (role === "patient") {
      navigate("/appointment"); // Redirect to homepage
    } else {
      navigate("/Doctor-Dashboard");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  return (
    <ErrorBoundary>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />

        <Routes>
          {/* Route for unauthenticated users to sign in */}
          <Route
            path="/SignIn"
            element={!isAuthenticated && <SignInPage onSignIn={handleSignIn} />}
          />

          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
              </>
            }
          ></Route>

          {/* Handle redirect to New Account Page if account does not exist */}
          <Route path="/signup" element={<NewAccountPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Stats" element={<StatsPage />} />
          <Route path="/Doctors" element={<Doctors />} />

          {/* Protected routes for authenticated users */}
          {isAuthenticated ? (
            <>
              <Route path="/appointment" element={<AppointmentsPage />} />
              <Route path="/Doctor-Dashboard" element={<DoctorDashboard />} />
            </>
          ) : (
            <Route
              path="*"
              element={
                <div className="text-center mt-20"> Pls login to access </div>
              }
            />
          )}

          {/* Redirect any unknown routes to sign-in page if unauthenticated */}
          {/* <Route path="*" element={<SignInPage onSignIn={handleSignIn} />} /> */}
        </Routes>
      </div>
      <ButtonGradient />
    </ErrorBoundary>
  );
};

export default App;

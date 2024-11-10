import axios from "axios";

const API_URL = "http://localhost:5000/api";
// const API_URL = "https://allevia.onrender.com/api";

export const getDoctorAppointments = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/appointment/doctor`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching doctor appointments:", error);
    throw error;
  }
};

export const createAppointment = async (doctorId, date, time, reason) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_URL}/appointment/create`,
      {
        doctorId,
        date,
        time,
        reason,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating appointment:", error);
    throw error;
  }
};

export const registerDoctor = async (name, email, password, speciality) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_URL}/auth/register-doctor`,
      {
        name,
        email,
        password,
        speciality,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error registering doctor:", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    // Assuming the response contains a token, you might want to store it in localStorage
    const { token } = response.data;
    if (token) {
      localStorage.setItem("token", token);
    }

    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const registerUser = async (name, dob, email, password, role) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      name,
      dob,
      email,
      password,
      role, // Sending the selected role to the backend
    });

    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const fetchDoctors = async () => {
  try {
    const response = await axios.get(`${API_URL}/doctors/list`);
    return response.data;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
};

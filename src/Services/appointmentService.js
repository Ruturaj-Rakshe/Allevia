import axios from "axios";

const API_URL = "http://localhost:5000/api";

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

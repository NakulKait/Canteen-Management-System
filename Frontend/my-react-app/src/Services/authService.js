import axios from "axios";

const BASE_URL = "https://canteen-management-system-pidg.onrender.com";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response || error.message);
    throw error.response?.data?.message || "Registration failed";
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

import axios from "axios";
const BASE_URL = "https://canteen-management-system-pidg.onrender.com/admin";

//const BASE_URL = "http://localhost:8080/admin";

export async function fetchTotalUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);

    return response.data.totalUsers; // expects { totalUsers: number }
  } catch (error) {
    console.error("Error in fetchTotalUsers:", error);
    return 0;
  }
}

export async function fetchTotalOrders() {
  try {
    const response = await axios.get(`${BASE_URL}/orders`);

    return response.data.totalOrders; // expects { totalOrders: number }
  } catch (error) {
    console.error("Error in fetchTotalOrders:", error);
    return 0;
  }
}

export async function fetchAllUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users-list`);
    console.log("Users list:", response.data);
    return response.data; // expects Array<User>
  } catch (error) {
    console.error("Error in fetching users", error);
    return [];
  }
}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(id, userData) {
  try {
    console.log(userData);
    const response = await axios.put(`${BASE_URL}/users/${id}`, userData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAllOrders() {}

import axios from "axios";
//const BASE_URL = "https://canteen-management-system-pidg.onrender.com/admin";

const BASE_URL = "http://localhost:8080";

export async function fetchTotalUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/admin/users`);

    return response.data.totalUsers; // expects { totalUsers: number }
  } catch (error) {
    console.error("Error in fetchTotalUsers:", error);
    return 0;
  }
}




export async function fetchAllUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/admin/users-list`);
    console.log("Users list:", response.data);
    return response.data; // expects Array<User>
  } catch (error) {
    console.error("Error in fetching users", error);
    return [];
  }
}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/users/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchTotalOrders() {
  
}

export async function updateUser(id, userData) {
  try {
    console.log(userData);
    const response = await axios.put(`${BASE_URL}/admin/users/${id}`, userData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
}



const API_BASE_URL = "http://localhost:8085";

// Get all orders
export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders", error);
    throw error;
  }
};

// Get single order by ID
export const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${orderId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order ${orderId}`, error);
    throw error;
  }
};



export const updateOrderStatus= async (orderId, status) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/orders/${orderId}/status`,
      null,
      { params: { status } }
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating order ${orderId}`, error);
    throw error;
  }
};




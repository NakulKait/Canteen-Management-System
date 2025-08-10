import { apiFetch } from "../api/api";

const BASE_URL = "https://canteen-management-system-pidg.onrender.com/admin";
// const BASE_URL = "http://localhost:8080/admin";

export async function fetchTotalUsers() {
  try {
    const response = await apiFetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json(); // ✅ convert Response to JSON
    return data.totalUsers; // expects { totalUsers: number }
  } catch (error) {
    console.error("Error in fetchTotalUsers:", error);
    return 0;
  }
}

// export async function fetchTotalOrders() {
//   try {
//     const response = await apiFetch(`${BASE_URL}/orders`);
//     if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//     const data = await response.json();
//     return data.totalOrders; // expects { totalOrders: number }
//   } catch (error) {
//     console.error("Error in fetchTotalOrders:", error);
//     return 0;
//   }
// }

export async function fetchAllUsers() {
  try {
    const response = await apiFetch(`${BASE_URL}/users-list`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("Users list:", data);
    return data; // expects Array<User>
  } catch (error) {
    console.error("Error in fetching users", error);
    return [];
  }
}

export async function deleteUser(id) {
  try {
    const response = await apiFetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function updateUser(id, userData) {
  try {
    console.log(userData);
    const response = await apiFetch(`${BASE_URL}/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllOrders() {
  try {
    const response = await apiFetch(`${BASE_URL}/orders-list`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data; // expects Array<Order>
  } catch (error) {
    console.error("Error in getAllOrders:", error);
    return [];
  }
}

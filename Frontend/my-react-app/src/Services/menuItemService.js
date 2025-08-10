// src/services/menuItemService.js

const BASE_URL = "https://canteen-management-system-pidg.onrender.com/MenuItems";

//const BASE_URL = "http://localhost:8080/MenuItems";

// 1. GET all menu items
export const getAllMenuItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getItems`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch menu items:", error);
    throw error;
  }
};

// 2. DELETE menu item by ID
export async function deleteMenuItemById(id) {
  try {
    console.log(id);
    const response = await fetch(`${BASE_URL}/delete/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to delete menu item:", error);
    throw error;
  }
}

// 3. UPDATE menu item by ID
export const updateMenuItem = async (id, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errMsg = await response.text();
      throw new Error(`HTTP error! Status: ${response.status} - ${errMsg}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to update menu item:", error);
    throw error;
  }
};

// 4. GET menu item by ID
// ✅ Corrected
export const getMenuItemById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/get/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch menu item with id ${id}:`, error);
    throw error;
  }
};

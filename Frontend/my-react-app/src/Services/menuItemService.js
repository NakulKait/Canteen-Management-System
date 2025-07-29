// src/services/menuItemService.js

const BASE_URL = "http://localhost:8080/MenuItems";

export const getAllMenuItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getItems`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch menu items:", error);
    throw error; // Let the component handle it if needed
  }
};

// Add other services here later (addItem, deleteItem, etc.)

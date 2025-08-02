// src/services/menuItemService.js

const BASE_URL = "http://localhost:8080/MenuItems";

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
export const deleteMenuItemById = async (id) => {
  try {
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
};

// 3. UPDATE menu item by ID
export const updateMenuItemById = async (id, updatedData) => {
  try {
    const formData = new FormData();
    formData.append("name", updatedData.name);
    formData.append("description", updatedData.description);
    formData.append("price", updatedData.price);
    formData.append("category", updatedData.category);
    formData.append("available", updatedData.available);
    formData.append("isSpecial", updatedData.isSpecial);
    if (updatedData.image) {
      formData.append("image", updatedData.image);
    }

    const response = await fetch(`${BASE_URL}/update/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to update menu item:", error);
    throw error;
  }
};

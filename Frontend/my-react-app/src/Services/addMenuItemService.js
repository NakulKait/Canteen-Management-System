// src/services/addMenuItemService.js

const BASE_URL = "http://localhost:8080/MenuItems";

export const addMenuItem = async (formData) => {
  const data = new FormData();
  data.append("name", formData.name);
  data.append("description", formData.description);
  data.append("price", formData.price);
  data.append("category", formData.category);
  data.append("available", formData.available.toString());
  data.append("isSpecial", formData.isSpecial.toString());

  if (formData.image) {
    data.append("image", formData.image);
  }

  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    body: data,
  });

  if (!response.ok) {
    throw new Error("Failed to upload item");
  }

  return await response.json();
};

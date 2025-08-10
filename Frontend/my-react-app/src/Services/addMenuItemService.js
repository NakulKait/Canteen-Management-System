import { toast } from "react-toastify";
//const BASE_URL =  "https://canteen-management-system-pidg.onrender.com/MenuItems";

const BASE_URL = "http://localhost:8080/MenuItems";

export const addMenuItem = async (formData, onSuccess) => {
  const data = new FormData();
  data.append("name", formData.name);
  data.append("description", formData.description);
  data.append("price", formData.price);
  data.append("category", formData.category);
  data.append("available", formData.available.toString());
  data.append("isSpecial", formData.isSpecial.toString());
  data.append("itemType", formData.itemType.toString());

  if (formData.image) {
    data.append("image", formData.image);
  }

  try {
    const response = await fetch(`${BASE_URL}/add`, {
      method: "POST",
      body: data,
    });

    if (!response.ok) throw new Error("Upload failed");

    toast.success("Item added successfully!");
    if (onSuccess) onSuccess();
  } catch (err) {
    toast.error("Failed to add item");
  }
};

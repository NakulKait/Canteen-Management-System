import React, { useState } from "react";
import "../styles/AddMenuItem.css";
import { addMenuItem } from "../Services/addMenuItemService";

const AddMenuItem = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
    available: true,
    isSpecial: false,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.category) {
      return toast.error("Please fill in all required fields.");
    }

    await addMenuItem(formData, () => {
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null,
        available: true,
        isSpecial: false,
      });
      setImagePreview(null);
      if (onAdd) onAdd();
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="p-4 rounded bg-white shadow"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h4 className="text-center mb-3 text-orange fw-bold">
          Add New Menu Item
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Item Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter item name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Short description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Price (₹)</label>
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Category</label>
            <select
              name="category"
              className="form-select"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Category --</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Beverages">Beverages</option>
              <option value="Desserts">Desserts</option>
              <option value="Today's Menu">Today's Menu</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Upload Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="mt-3 text-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    maxHeight: "200px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            )}
          </div>

          <div className="form-check mb-2">
            <input
              type="checkbox"
              name="available"
              className="form-check-input"
              id="available"
              checked={formData.available}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="available">
              Available
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="isSpecial"
              className="form-check-input"
              id="isSpecial"
              checked={formData.isSpecial}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="isSpecial">
              Special Item
            </label>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-warning text-white">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenuItem;

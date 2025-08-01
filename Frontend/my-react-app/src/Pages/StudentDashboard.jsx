import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import FoodCard from "../Components/FoodCard";
import { getAllMenuItems } from "../Services/menuItemService"; 

function StudentDashboard() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryOrder = [
    "All",
    "Beverages",
    "Breakfast",
    "Veg",
    "Non-Veg",
    "Desserts",
  ];

  // Fetch data using the service
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getAllMenuItems(); 
        setMenuItems(data);
      } catch (err) {
        console.error("Failed to fetch menu:", err);
      }
    };

    fetchMenu();
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />

      <div className="container py-5">
        <h2 className="display-5 fw-bold text-dark mb-2">
          Welcome back, <span className="text-warning">John Doe</span>! 👋
        </h2>
        <p className="text-secondary fs-5">
          Ready to order some delicious food today?
        </p>
      </div>

      <div className="container pb-3">
        <h3 className="h3 fw-semibold mb-4 d-flex align-items-center">
          🌟 Today's Menu
        </h3>

        <div className="d-flex justify-content-center mb-4">
          <div
            className="d-flex rounded-pill border overflow-hidden"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            {categoryOrder.map((category, index) => (
              <button
                key={index}
                className={`btn px-4 py-2 ${
                  selectedCategory === category
                    ? "bg-white fw-semibold border"
                    : "bg-transparent text-secondary"
                }`}
                onClick={() => setSelectedCategory(category)}
                style={{
                  borderRadius: 0,
                  borderRight: "1px solid #dee2e6",
                  borderColor:
                    selectedCategory === category ? "#dee2e6" : "transparent",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {filteredItems.map((item) => (
            <div className="col-12 col-md-4" key={item.id}>
              <FoodCard
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
                isSpecial={item.isSpecial}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;

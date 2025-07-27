import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import FoodCard from "../Components/FoodCard";

// All items categorized
const menu = {
  Veg: [
    {
      id: 1,
      name: "Pav Bhaji",
      description: "Spiced vegetable curry served with buttered bread rolls",
      price: 80,
      imageUrl: "/images/pavbhaji.jpg",
      isSpecial: true,
    },
    {
      id: 2,
      name: "Masala Chai",
      description: "Traditional Indian tea with aromatic spices",
      price: 15,
      imageUrl: "/images/Masala-Chai-.jpg",
      isSpecial: true,
    },
  ],
  "Non-Veg": [
    {
      id: 3,
      name: "Chicken Biryani",
      description:
        "Aromatic basmati rice with tender chicken pieces, cooked with traditional spices",
      price: 180,
      imageUrl: "/images/chicken-biryani.jpg",
      isSpecial: true,
    },
  ],
  Breakfast: [
    {
      id: 4,
      name: "Idli Sambar",
      description: "Steamed rice cakes served with sambar and chutney",
      price: 40,
      imageUrl: "/images/Idli-Sambar.jpg",
      isSpecial: false,
    },
    {
      id: 5,
      name: "Aloo Paratha",
      description: "Stuffed potato flatbread served with curd and pickle",
      price: 50,
      imageUrl: "/images/aloo-paratha.jpg",
      isSpecial: false,
    },
    {
      id: 6,
      name: "Pav Bhaji",
      description: "Spiced vegetable curry served with buttered bread rolls",
      price: 80,
      imageUrl: "/images/pavbhaji.jpg",
      isSpecial: true,
    },
    {
      id: 7,
      name: "Masala Chai",
      description: "Traditional Indian tea with aromatic spices",
      price: 15,
      imageUrl: "/images/Masala-Chai-.jpg",
      isSpecial: true,
    },
  ],
};

function StudentDashboard() {
  const [selectedCategory, setSelectedCategory] = useState("Veg");

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />

      {/* Welcome Section */}
      <div className="container py-5">
        <h2 className="display-5 fw-bold text-dark mb-2">
          Welcome back, <span className="text-warning">John Doe</span>!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h2>
        <p className="text-secondary fs-5">
          Ready to order some delicious food today?
        </p>
      </div>

      {/* Today's Menu */}
      <div className="container pb-3">
        <h3 className="h3 fw-semibold mb-4 d-flex align-items-center">
          <span className="me-2" role="img" aria-label="star">
            🌟
          </span>{" "}
          Today's Menu
        </h3>

        {/* Category Selector - Pill Style */}
        <div className="d-flex justify-content-center mb-4">
          <div
            className="d-flex rounded-pill border overflow-hidden"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            {Object.keys(menu).map((category) => (
              <button
                key={category}
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

        {/* Cards based on category */}
        <div className="row g-4">
          {menu[selectedCategory].map((item) => (
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

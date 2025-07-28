import React from "react";
import Navbar from "../Components/Navbar";
import FoodCard from "../Components/FoodCard";

const specials = [
  {
    id: 1,
    name: "Chicken Biryani",
    description:
      "Aromatic basmati rice with tender chicken pieces, cooked with traditional spices",
    price: 180,
    imageUrl: "/images/chicken-biryani.jpg",
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
  {
    id: 3,
    name: "Pav Bhaji",
    description: "Spiced vegetable curry served with buttered bread rolls",
    price: 80,
    imageUrl: "/images/pavbhaji.jpg",
    isSpecial: true,
  },
];

function StudentDashboard() {
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

      {/* Specials Section */}
      <div className="container pb-5">
        <h3 className="h3 fw-semibold mb-4 d-flex align-items-center">
          <span className="me-2" role="img" aria-label="star">
            🌟
          </span>{" "}
          Today's Specials
        </h3>
        <div className="row g-4">
          {specials.map((item) => (
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

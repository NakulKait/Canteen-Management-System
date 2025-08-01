import React from "react";

const FoodCard = ({ name, description, price, imageUrl, isSpecial }) => {
  console.log("Rendering:", name, "| isSpecial:", isSpecial);

  return (
    <div className="card h-100 shadow-sm border-0 rounded-4">
      <img
        src={`http://localhost:8080${imageUrl}`}
        alt={name}
        className="card-img-top rounded-top"
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/300x200?text=No+Image")
        }
      />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0 fw-semibold">{name}</h5>
          {isSpecial && (
            <span className="badge bg-warning text-dark ms-2">Special</span>
          )}
        </div>
        <p
          className="card-text text-secondary mb-3"
          style={{ minHeight: "48px" }}
        >
          {description}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fw-bold text-orange" style={{ color: "#f97316" }}>
            ₹{price}
          </span>
          <button className="btn btn-warning text-white fw-semibold shadow-sm">
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

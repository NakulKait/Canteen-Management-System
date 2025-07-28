import React from "react";
import "../styles/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCart, QrCode, Users, BarChart2 } from "lucide-react";

import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Dashboard() {
  const features = [
    {
      title: "Easy Ordering",
      description: "Browse menu, add to cart, and order with just a few clicks",
      icon: <ShoppingCart color="white" size={30} />,
      color: "#ffb703", // Icon background
    },
    {
      title: "QR Code System",
      description:
        "Secure order validation with unique QR codes for each order",
      icon: <QrCode color="white" size={30} />,
      color: "#fae588",
    },
    {
      title: "User Management",
      description:
        "Separate portals for students, teachers, and administrators",
      icon: <Users color="white" size={30} />,
      color: "#d62828",
    },
    {
      title: "Analytics",
      description: "Real-time insights into orders, revenue, and popular items",
      icon: <BarChart2 color="white" size={30} />,
      color: "#f77f00",
    },
  ];

  return (
    <div className="dashboard">
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left: Logo */}
          <a
            className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4"
            as={Link}
            to="/"
            style={{ color: "#f97316" }}
          >
            <span role="img" aria-label="canteen">
              🍽
            </span>
            <span>Canteen Manager</span>
          </a>

          {/* Right Section */}
          <div className="d-flex align-items-center gap-3">
            {/* Cart Button */}
            <Link
              to="/login"
              className="btn btn-warning d-flex align-items-center gap-2 text-white shadow-sm"
            >
              <span>Student Login</span>
            </Link>
            <Link
              to="/admin-login"
              className="btn btn-warning d-flex align-items-center gap-2 text-white shadow-sm"
            >
              <span>Admin Login</span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="hero-section">
        <div className="hero-content">
          <h1 style={{ color: "darkgray" }}>Smart Canteen Management</h1>
          <p>
            Streamline your campus dining experience with digital ordering, QR
            code validation, and real-time management
          </p>
          <div className="hero-buttons">
            <Link to="/student-dashboard" className="btn-filled">
              Get Started as Student
            </Link>
            <Link to="/admin-dashboard" className="btn-filled">
              Admin Dashboard
            </Link>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Why Choose Our System Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">Why Choose Our System?</h2>
          <div className="row g-4">
            {features.map((feature, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center bg-white rounded">
                    {/* ICON with colored background */}
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                      style={{
                        width: 70,
                        height: 70,
                        backgroundColor: feature.color, // icon background color
                      }}
                    >
                      {feature.icon}
                    </div>
                    <h5 className="fw-bold mt-2">{feature.title}</h5>
                    <p className="text-muted small">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(to right, #f97316, #fb923c)",
          padding: "80px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-4">Hungry? Let’s Make It Quick & Easy!</h2>
          <p className="lead mb-4">
            Use our smart system to browse the menu, place orders, and track
            everything—right from your device.
            <br />
            management system
          </p>
          <Link
            to="/student-dashboard"
            className="btn"
            style={{
              background: "linear-gradient(to right, #fbbf24, #f97316)",
              border: "none",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            Check Today’s Specials
          </Link>
        </div>
      </section>

      {/* Optional dark footer strip */}
      <Footer />
    </div>
  );
}

export default Dashboard;

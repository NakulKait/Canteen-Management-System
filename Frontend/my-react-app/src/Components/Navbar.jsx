// src/Components/Navbar.jsx
import React, { useState } from "react";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "../Styles/UserSidebar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const user = {
    fullName: "John Doe",
    email: "john@example.com",
    role: "Student",
  };

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left */}
          <div className="d-flex align-items-center gap-4">
            <a
              className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4"
              href="/"
              style={{ color: "#f97316" }}
            >
              <span role="img" aria-label="canteen">🍽</span>
              <span>Canteen System</span>
            </a>

            <Link to="/about-us" className="nav-link fw-semibold text-dark">
              About Us
            </Link>
            <Link to="/contact-us" className="nav-link fw-semibold text-dark">
              Contact Us
            </Link>
            <Link to="/faqs" className="nav-link fw-semibold text-dark">
              FAQ's
            </Link>
          </div>

          {/* Right */}
          <div className="d-flex align-items-center gap-3">
            <div onClick={openSidebar} role="button" className="d-flex align-items-center gap-1 text-dark">
              <UserIcon className="h-5 w-5" />
              <span>{user.fullName}</span>
            </div>
            <button className="btn btn-link p-0 ms-2 text-dark" title="Logout" onClick={handleLogout}>
              <HiOutlineArrowRightOnRectangle size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`user-sidebar ${isSidebarOpen ? "open" : ""}`}>
        {/* Header with Close Button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Your Profile</h5>
          <button onClick={closeSidebar} className="btn btn-sm btn-light border-0">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="d-flex flex-column align-items-center text-center">
          <div className="avatar-box">
            <img src="/images/OIP.jpeg" alt="User Avatar" className="avatar-img" />
          </div>
          <h5 className="fw-bold mt-3">{user.fullName}</h5>
          <p className="mb-1"><strong>Role:</strong> {user.role}</p>
          <p className="small text-muted">{user.email}</p>
          <hr />
          <button className="btn btn-dark w-100 mt-3" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

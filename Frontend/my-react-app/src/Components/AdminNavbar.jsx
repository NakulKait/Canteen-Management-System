// src/Components/AdminNavbar.jsx
import React, { useState } from "react";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "../Styles/AdminNavbar.css"; // ✅ Custom CSS file

function AdminNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left: Logo & Links */}
          <div className="d-flex align-items-center gap-4">
            <a
              className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4"
              href="/"
              style={{ color: "#f97316" }}
            >
              <span role="img" aria-label="canteen">🍽</span>
              <span>Admin Dashboard</span>
            </a>

            <Link to="/about-us" className="nav-link text-dark fw-semibold">
              About Us
            </Link>
            <Link to="/contact-us" className="nav-link text-dark fw-semibold">
              Contact Us
            </Link>
            <Link to="/faqs" className="nav-link text-dark fw-semibold">
              FAQ's
            </Link>
          </div>

          {/* Right: Profile and Logout */}
          <div className="d-flex align-items-center gap-3">
            <div onClick={toggleSidebar} role="button" className="d-flex align-items-center gap-1 text-dark">
              <UserIcon className="h-5 w-5" />
              <span>Admin User</span>
            </div>
            <button className="btn btn-link p-0 ms-2 text-dark" title="Logout">
              <HiOutlineArrowRightOnRectangle size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Profile Sidebar */}
      <div className={`admin-sidebar ${isSidebarOpen ? "open" : ""}`}>
        {/* Close Icon */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Profile</h5>
          <button onClick={toggleSidebar} className="btn btn-sm btn-light border-0">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Avatar & Info */}
        <div className="d-flex flex-column align-items-center text-center">
          <div className="avatar-box">
            <img src="/images/OIP.jpeg" alt="Admin Avatar" className="avatar-img" />
          </div>
          <h6 className="fw-bold mt-3">Admin User</h6>
          <p className="text-muted small">admin@canteen.com</p>
          <hr />
          <p className="small text-muted">You are logged in as Administrator.</p>
        </div>
      </div>
    </>
  );
}

export default AdminNavbar;

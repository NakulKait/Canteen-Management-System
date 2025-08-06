import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log("Parsed user:", parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a
            className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4"
            href="/"
            style={{ color: "#f97316" }}
          >
            <span role="img" aria-label="canteen">🍽️</span>
            <span>Canteen Manager</span>
          </a>

          {/* Right Controls */}
          <div className="d-flex align-items-center gap-3">
            <Link
              to="/cart"
              className="btn btn-warning d-flex align-items-center gap-2 text-white shadow-sm"
            >
              <FaShoppingCart />
              <span>Cart</span>
            </Link>

            {/* Only show user info if logged in */}
            {user && (
              <>
                <button
                  onClick={() => setShowSidebar(true)}
                  className="btn btn-outline-yellow d-flex align-items-center gap-1"
                >
                  <UserIcon className="h-5 w-5" />
                  <span>{user.fullName}</span>
                </button>

                <button
                  className="btn btn-link p-0 ms-2 text-dark"
                  title="Logout"
                  onClick={handleLogout}
                >
                  <HiOutlineArrowRightOnRectangle size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {showSidebar && user && (
        <div
          className="position-fixed top-0 end-0 bg-white text-dark p-4 shadow-lg"
          style={{
            width: "300px",
            height: "100vh",
            zIndex: 1050,
            transition: "right 0.3s ease-in-out",
          }}
        >
          {/* Close Button */}
          <button
            className="btn btn-sm btn-light position-absolute top-0 end-0 m-2"
            onClick={() => setShowSidebar(false)}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>

          {/* Profile Content */}
          <div className="d-flex flex-column align-items-center text-center mt-4">
            {user.avatar && (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
            <h5 className="fw-bold mt-3">{user.fullName}</h5>
            <p className="mb-1">
              <strong>Role:</strong> {user.role}
            </p>
            <p className="small">{user.email}</p>
            <hr />
            <button className="btn btn-dark w-100 mt-3" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

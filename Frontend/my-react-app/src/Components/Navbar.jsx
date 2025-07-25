import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <a
          className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4"
          href="/"
          style={{ color: "#f97316" }} // Tailwind's orange-500
        >
          <span role="img" aria-label="canteen">
            🍽️
          </span>
          <span>Canteen Manager</span>
        </a>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          {/* Cart Button */}
          <Link
            to="/cart"
            className="btn btn-warning d-flex align-items-center gap-2 text-white shadow-sm"
          >
            <FaShoppingCart />
            <span>Cart</span>
          </Link>

          {/* Profile */}
          <a
            href="/profile"
            className="d-flex align-items-center gap-1 text-dark text-decoration-none"
          >
            <UserIcon className="h-5 w-5" />
            <span>John Doe</span>
          </a>

          {/* Logout Button */}
          <button className="btn btn-link p-0 ms-2 text-dark" title="Logout">
            <HiOutlineArrowRightOnRectangle size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

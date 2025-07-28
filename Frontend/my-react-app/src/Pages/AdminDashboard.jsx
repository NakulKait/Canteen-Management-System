import React from "react";
import { Edit, Trash, Plus } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminNavbar from "../Components/AdminNavbar";
import Footer from "../Components/Footer";

const menuItems = [
  {
    name: "Chicken Biryani",
    desc: "Aromatic basmati rice with tender chicken pieces, cooked with traditional spices",
    price: "₹180",
  },
  {
    name: "Veg Thali",
    desc: "Complete vegetarian meal with dal, sabzi, roti, rice, and pickle",
    price: "₹120",
  },
  {
    name: "Samosa",
    desc: "Crispy triangular pastry filled with spiced potatoes and peas",
    price: "₹25",
  },
  {
    name: "Fresh Lime Soda",
    desc: "Refreshing lime soda with mint and black salt",
    price: "₹40",
  },
  {
    name: "Masala Chai",
    desc: "Traditional Indian tea with aromatic spices",
    price: "₹15",
  },
  {
    name: "Gulab Jamun",
    desc: "Soft and spongy milk dumplings in sugar syrup",
    price: "₹50",
  },
];

function AdminDashboard() {
  return (
    <div className="bg-light min-vh-100">
      <AdminNavbar />

      {/* Navigation Tabs */}
      <ul className="nav nav-tabs my-4">
        <li className="nav-item">
          <a className="nav-link disabled">Analytics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Users</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">QR Scanner</a>
        </li>
      </ul>

      {/* Menu Management */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 className="fw-bold">Menu Management</h5>
          <p className="text-muted small mb-0">
            Manage food items and categories
          </p>
        </div>
        <button className="btn btn-warning d-flex align-items-center">
          <Plus size={18} className="me-1" /> Add Item
        </button>
      </div>

      {/* Menu Cards */}
      <div className="row g-4">
        {menuItems.map((item, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <h6 className="fw-bold">{item.name}</h6>
                  <div>
                    <Edit size={16} className="me-2 text-muted" />
                    <Trash size={16} className="text-danger" />
                  </div>
                </div>
                <p className="text-muted small">{item.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-orange">{item.price}</span>
                  <span className="badge bg-success bg-opacity-10 text-success">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-3" />
      <Footer />
    </div>
  );
}

export default AdminDashboard;

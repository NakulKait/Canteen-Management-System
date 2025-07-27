import React from "react";
import {
  Edit,
  Trash,
  Plus,
  User,
  ShoppingBag,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminNavbar from "../Components/AdminNavbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Users", value: "150", icon: <User />, color: "orange" },
  {
    label: "Total Orders",
    value: "342",
    icon: <ShoppingBag />,
    color: "orange",
  },
  {
    label: "Total Revenue",
    value: "₹45,680",
    icon: <DollarSign />,
    color: "red",
  },
  { label: "Growth", value: "+12.5%", icon: <TrendingUp />, color: "yellow" },
];

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
      <br className="my-3" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
          >
            <div
              className={`p-2 rounded-full ${
                item.color === "orange"
                  ? "bg-orange-100 text-orange-600"
                  : item.color === "red"
                  ? "bg-red-100 text-red-600"
                  : item.color === "yellow"
                  ? "bg-yellow-100 text-yellow-600"
                  : ""
              }`}
            >
              {item.icon}
            </div>
            <div>
              <div className="text-gray-500 text-sm">{item.label}</div>
              <div className="text-xl font-bold text-orange-600">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border rounded-xl mb-6 overflow-hidden text-sm text-gray-600">
        <button className="flex-1 py-2 text-center hover:bg-gray-100">
          Analytics
        </button>
        <button className="flex-1 py-2 text-center hover:bg-gray-100">
          Orders
        </button>
        <button className="flex-1 py-2 text-center bg-white font-semibold border-x">
          Menu
        </button>
        <button className="flex-1 py-2 text-center hover:bg-gray-100">
          Users
        </button>
        <button className="flex-1 py-2 text-center hover:bg-gray-100">
          QR Scanner
        </button>
      </div>

      {/* Menu Management */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 className="fw-bold">Menu Management</h5>
          <p className="text-muted small mb-0">
            Manage food items and categories
          </p>
        </div>
        <Link to="/addMenuItem" className="text-decoration-none">
          <button className="btn btn-warning d-flex align-items-center">
            <Plus size={18} className="me-1" /> Add Item
          </button>
        </Link>
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

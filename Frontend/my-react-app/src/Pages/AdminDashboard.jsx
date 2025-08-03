import React, { useEffect, useState } from "react";
import {Edit,Trash,Plus,User,ShoppingBag,DollarSign,TrendingUp} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminNavbar from "../Components/AdminNavbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {getAllMenuItems,deleteMenuItemById} from "../Services/menuItemService";
import { fetchTotalUsers } from "../Services/adminDashboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";






function AdminDashboard() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[userCount,setUserCount]=useState(0);
  const[orderCount,setOrderCount]=useState(0);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await getAllMenuItems();
        console.log("Menu API Response:", response); // 👈 Add this line
        setMenuItems(response);
      } catch (err) {
        console.error("Failed to fetch menu items", err);
        setError("Unable to fetch menu items.");
      } finally {
        setLoading(false);
      }
    };

    const fetchUsers =async ()=>{
      const count =await fetchTotalUsers();
      setUserCount(count);
    };

    const fetchOrders=async()=>{
      const count=await fetchTotalOrders();
      setOrderCount(count);
    }

    fetchMenu();
    fetchUsers();
    fetchOrders();
  }, []);


const stats = [
  { label: "Total Users", value: userCount, icon: <User />, color: "orange" },
  {
    label: "Total Orders",
    value: orderCount,
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


  const navigate = useNavigate();
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirm) return;

    try {
      await deleteMenuItemById(id);
      toast.success("Item deleted successfully");

      // Refresh menu after deletion
      const updatedItems = await getAllMenuItems();
      setMenuItems(updatedItems);
    } catch (error) {
      toast.error("Failed to delete item");
    }
  };

  return (
    <div className="bg-light min-vh-100">
      <AdminNavbar />
      <br className="my-3" />

      {/* Stats */}
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

      {/* Feedback / Error */}
      {loading && <p className="text-center">Loading menu...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Menu Cards */}
      <div className="row g-4">
        {menuItems.map((item, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                {/* Header: Name + Icons */}
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 className="fw-bold mb-0">{item.name}</h5>
                  <div>
                    <Edit
                      size={16}
                      className="me-2 text-muted"
                      role="button"
                      onClick={() => navigate(`/editMenuItem/${item.id}`)}
                    />
                    <Trash
                      size={16}
                      className="text-danger"
                      role="button"
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted small mb-3">{item.description}</p>

                {/* Footer: Price + Availability */}
                <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
                  <span className="fw-semibold text-primary">
                    ₹{item.price}
                  </span>
                  <span
                    className={`badge ${
                      item.available ? "bg-success text-light" : "bg-secondary"
                    }`}
                  >
                    {item.available ? "Available" : "Out of Stock"}
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

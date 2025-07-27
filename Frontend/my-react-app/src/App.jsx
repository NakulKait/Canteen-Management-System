import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import AdminLogin from "./Pages/AdminLogin";
import StudentDashboard from "./Pages/StudentDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import Dashboard from "./Pages/Dashboard";
import AddMenuItem from "./Pages/AddMenuItem";

import CartList from "./Components/CartList";

import "./App.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/addMenuItem" element={<AddMenuItem />} />
      </Routes>
    </Router>
  );
}

export default App;

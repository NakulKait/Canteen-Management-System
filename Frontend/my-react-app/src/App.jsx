import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import "./App.css";
import AdminLogin from "./Pages/AdminLogin";
import StudentDashboard from "./Pages/StudentDashboard";
import AdminDashboard from "./Pages/AdminDashboard";

import CartList from "./Components/CartList";
import Dashboard from "./Pages/Dashboard";
import AddMenuItem from "./Pages/AddMenuItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<Hello />} />
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

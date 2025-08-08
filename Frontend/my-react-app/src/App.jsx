import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Page & Component Imports
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import AdminLogin from "./Pages/AdminLogin";
import StudentDashboard from "./Pages/StudentDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import Dashboard from "./Pages/Dashboard";
import AddMenuItem from "./Pages/AddMenuItem";
import VerifyOtp from "./Components/VerifyOtp";
import CartList from "./Components/CartList";
import Feedback from "./Pages/FeedbackPage";
import EditMenuItem from "./Pages/EditMenuItem";
import TodaysSpecial from "./Pages/TodaysSpecial";

// Info Pages
import AboutUs from "./Pages/About_us";
import ContactUs from "./Pages/Contact_us";
import Faq from "./Pages/faqs";  // ✅ Ensure the file is named `Faq.jsx` or `Faq.js`

import "./App.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Authentication & User Management */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        {/* Dashboards */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Menu & Food Items */}
        <Route path="/addMenuItem" element={<AddMenuItem />} />
        <Route path="/editMenuItem/:id" element={<EditMenuItem />} />
        <Route path="/student-todaysSpecial" element={<TodaysSpecial />} />

        {/* Cart & Feedback */}
        <Route path="/cart" element={<CartList />} />
        <Route path="/student/feedback" element={<Feedback />} />

        {/* Static Info Pages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<Faq />} /> {/* ✅ FAQ route added correctly */}
      </Routes>
    </Router>
  );
}

export default App;

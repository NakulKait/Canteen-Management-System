import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Services/authService";

const AdminLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await loginUser(form); // Call API
      console.log("Login success:", data);

      if (data.role === "ADMIN") {
        navigate("/admin-dashboard"); //  Redirect on success
      } else {
        setError("Not authorized as admin.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError(err); //Show error on wrong credentials
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="p-4 rounded bg-white shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
            marginBottom: "1rem",
          }}
        >
          <ArrowLeftIcon style={{ height: "20px", marginRight: "8px" }} />
          <strong>Back to Home</strong>
        </Link>
        <div className="text-center mb-4">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <h4 className="mt-3 text-orange fw-bold">Admin Login</h4>
          <p className="text-muted">Please sign in to continue</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="text-danger text-center">{error}</p>}
          <div className="d-grid">
            <button className="btn btn-warning text-white" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

//  {/* Hero Section */}
//       <div className="hero-section text-center text-white">
//         <div className="container my-5 px-4 px-md-5">
//           <div className="row align-items-center">
//             <div className="col-md-6 text-center text-md-start">
//               <h1 className="fw-bold mb-3 text-dark">
//                 Smart Canteen Management
//               </h1>
//               <p className="lead text-muted">
//                 Streamline your campus dining experience with digital ordering,
//                 QR code validation, and real-time management.
//               </p>
//               <div className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start">
//                 <Link
//                   to="/student-dashboard"
//                   className="btn btn-warning text-white px-4"
//                 >
//                   Student Dashboard
//                 </Link>
//                 <Link
//                   to="/admin-dashboard"
//                   className="btn btn-outline-warning px-4"
//                 >
//                   Admin Dashboard
//                 </Link>
//               </div>
//             </div>
//             {/* <div className="col-md-6 text-center mt-4 mt-md-0">
//               <img
//                 src="/images/canteen-hero.jpg"
//                 alt="Canteen Hero"
//                 className="img-fluid"
//                 style={{ maxWidth: "400px" }}
//               />
//             </div> */}
//           </div>
//         </div>
//       </div>

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Phone, HelpCircle } from "lucide-react";
import "./ContactUs.css"; // Your sidebar styling

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="d-flex" style={{ height: "100vh", width: "100vw", margin: 0, padding: 0, overflow: "hidden" }}>
      {/* Sidebar */}
      <div
        className="sidebar d-flex flex-column align-items-center py-4"
        style={{
          width: "60px",
          backgroundColor: "orange",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1000,
        }}
      >
        <Link to="/" className="mb-4 text-white" title="Home">
          <Home />
        </Link>
        <Link to="/about-us" className="mb-4 text-white" title="About Us">
          <Info />
        </Link>
        <Link to="/contact-us" className="mb-4 text-white" title="Contact Us">
          <Phone />
        </Link>
        <Link to="/faqs" className="text-white" title="FAQs">
          <HelpCircle />
        </Link>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 bg-light"
        style={{
          marginLeft: "60px",
          width: "calc(100% - 60px)",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <div className="bg-white shadow p-5 rounded w-100 h-100" style={{ overflowY: "auto" }}>
          <h3 className="text-center fw-bold mb-4" style={{ color: "#FFD700" }}>
            Contact Us 📞
          </h3>

          {submitted && (
            <div className="alert alert-success">Thank you for contacting us!</div>
          )}

          <form onSubmit={handleSubmit} className="px-3">
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message..."
              />
            </div>

            <button type="submit" className="btn w-30" style={{ backgroundColor: "orange", color: "white" }}>
              Send Message
            </button>
          </form>

          <p className="text-center text-secondary mt-4 small">
            © {new Date().getFullYear()} Canteen Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

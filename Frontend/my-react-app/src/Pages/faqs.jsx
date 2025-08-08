// src/Pages/Faq.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Home, Info, Phone, HelpCircle } from "lucide-react";
import "./ContactUs.css"; // Using same sidebar styling as ContactUs

const Faq = () => {
  const faqs = [
    {
      question: "What is the Canteen Management System?",
      answer:
        "The Canteen Management System is a platform that allows students to browse, order, and manage food items online from the college canteen.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Log in with your student account, browse the menu, add your desired items to the cart, and proceed to checkout.",
    },
    {
      question: "Can I cancel or edit my order?",
      answer:
        "Once the order is confirmed, it cannot be edited or canceled. Please ensure your selection before finalizing.",
    },
    {
      question: "Is online payment available?",
      answer:
        "Currently, we support both cash and online payment options based on your convenience.",
    },
    {
      question: "Who should I contact for issues?",
      answer:
        "You can use the 'Contact Us' page to raise queries or complaints, and our team will get back to you shortly.",
    },
  ];

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
        className="flex-4grow-1 bg-light"
        style={{
          marginLeft: "0px",
          width: "calc(100% - 50px)",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <div className="bg-white shadow p-5 rounded w-100 h-100" style={{ overflowY: "auto" }}>
          <h3 className="text-center fw-bold mb-4" style={{ color: "#FFD700" }}>
            Frequently Asked Questions ❓
          </h3>

          <section className="container" style={{ maxWidth: "900px" }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 p-3 rounded"
                style={{
                  background: "#f9f9f9",
                  borderLeft: "4px solid #FFD700",
                }}
              >
                <h5 style={{ fontWeight: "600", color: "#333" }}>{faq.question}</h5>
                <p style={{ marginTop: "px", color: "#666" }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <p className="text-center text-secondary mt-4 small">
            © {new Date().getFullYear()} Canteen Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;

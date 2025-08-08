import React, { useState, useEffect } from "react";
import {
  submitFeedback,
  getAllFeedback,
  deleteFeedback,
} from "../Services/feedbackService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, TrashIcon } from "@heroicons/react/24/solid";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    try {
      const res = await getAllFeedback();
      // Adjust to your API response shape
      const data = Array.isArray(res) ? res : res.data ?? [];
      setFeedbacks(data);
    } catch (error) {
      console.error("Load error:", error);
      toast.error("Failed to load feedbacks.");
      setFeedbacks([]);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.warning("Please fill in all fields.");
      return;
    }

    try {
      await submitFeedback(form);
      toast.success("Feedback submitted!");
      setForm({ name: "", email: "", message: "" });
      loadFeedbacks();
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to submit feedback.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFeedback(id);
      toast.info("Feedback deleted.");
      loadFeedbacks();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete feedback.");
    }
  };

  return (
    <div className="fullscreen-wrapper d-flex justify-content-center align-items-center bg-light py-5">
      <div
        className="p-4 rounded bg-white shadow"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <Link
          to="/student/dashboard"
          className="mb-3 d-flex align-items-center text-decoration-none text-dark"
        >
          <ArrowLeftIcon style={{ height: "20px", marginRight: "8px" }} />
          <strong>Back to Dashboard</strong>
        </Link>

        <div className="text-center mb-4">
          <h4 className="text-warning fw-bold">We Value Your Feedback</h4>
          <p className="text-muted">
            Tell us how we can improve your experience
          </p>
        </div>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="3"
              placeholder="Type your feedback here..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="d-grid mb-4">
            <button className="btn btn-warning text-white" type="submit">
              Submit Feedback
            </button>
          </div>
        </form>

        {/* Feedback List */}
        <h5 className="mt-4">All Feedback</h5>
        {feedbacks.length === 0 ? (
          <p className="text-muted">No feedbacks yet.</p>
        ) : (
          <ul className="list-group">
            {feedbacks.map((fb) => (
              <li
                key={fb.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{fb.name}</strong> <br />
                  <span className="text-muted">{fb.message}</span>
                </div>
                <TrashIcon
                  style={{ height: "20px", cursor: "pointer", color: "red" }}
                  onClick={() => handleDelete(fb.id)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;

import React, { useEffect, useState } from "react";
import { getAllFeedback } from "../Services/feedbackService"; // service file
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await getAllFeedback();
        setFeedbacks(response || []);
      } catch (error) {
        console.error("Failed to fetch feedbacks", error);
        toast.error("Failed to load feedbacks");
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return <p>Loading feedbacks...</p>;

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold">Feedback</h2>

      {Array.isArray(feedbacks) && feedbacks.length === 0 ? (
        <p>No feedbacks yet.</p>
      ) : (
        <div className="row">
          {feedbacks.map((feedback, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <div className="card shadow-sm p-3 rounded-3">
                <h5 className="text-primary fw-semibold">{feedback.name}</h5>
                <p className="mb-0">{feedback.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;

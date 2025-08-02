// feedbackService.js

import axios from "axios";

// ✅ Changed to HTTP instead of HTTPS
const API_URL = "https://localhost:7281/api/feedback";

/**
 * Submit new feedback
 * @param {Object} feedbackData - Object with name, email, message, etc.
 * @returns {Promise} Axios Promise
 */
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(API_URL, feedbackData);
    console.log("Feedback submitted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error submitting feedback:",
      error.response || error.message
    );
    throw error;
  }
};

/**
 * Get all feedback entries from backend
 * @returns {Promise} Axios Promise
 */
export const getAllFeedback = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Fetched all feedbacks:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching feedbacks:", error.response || error.message);
    throw error;
  }
};

/**
 * Delete a feedback entry by ID
 * @param {number} id - Feedback ID to delete
 * @returns {Promise} Axios Promise
 */
export const deleteFeedback = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    console.log(`Feedback with ID ${id} deleted successfully.`);
    return response.data;
  } catch (error) {
    console.error(
      `Error deleting feedback with ID ${id}:`,
      error.response || error.message
    );
    throw error;
  }
};

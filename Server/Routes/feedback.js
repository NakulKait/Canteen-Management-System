const express = require('express');
const router = express.Router();

const pool = require('../db/mysql');
const result = require('../utils/result');

// POST /feedback - Add feedback
router.post('/', (req, res) => {
  const { order_id, rating, comment } = req.body;
  const user_id = req.headers.id;

  if (!order_id || !rating || !user_id) {
    return res.send(result.createResult("Missing required fields", null));
  }

  const sql = `
    INSERT INTO feedback (user_id, order_id, rating, comment)
    VALUES (?, ?, ?, ?)
  `;

  pool.query(sql, [user_id, order_id, rating, comment], (err, data) => {
    res.send(result.createResult(err, data));
  });
});

// GET /feedback/order/:order_id - Feedback by order
router.get('/order/:order_id', (req, res) => {
  const { order_id } = req.params;
  const sql = `
    SELECT feedback_id, user_id, order_id, rating, comment, created_at
    FROM feedback
    WHERE order_id = ?
  `;

  pool.query(sql, [order_id], (err, data) => {
    if (err) return res.send(result.createResult(err, null));
    if (data.length === 0) return res.send(result.createResult("No feedback found for this order", null));

    res.send(result.createResult(null, data));
  });
});

// GET /feedback/user/:user_id - Feedback by user
router.get('/user/:user_id', (req, res) => {
  const { user_id } = req.params;
  const sql = `
    SELECT feedback_id, user_id, order_id, rating, comment, created_at
    FROM feedback
    WHERE user_id = ?
  `;

  pool.query(sql, [user_id], (err, data) => {
    if (err) return res.send(result.createResult(err, null));
    if (data.length === 0) return res.send(result.createResult("No feedback found for this user", null));

    res.send(result.createResult(null, data));
  });
});

module.exports = router;

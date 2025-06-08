const express = require('express');
const router = express.Router();

const pool = require('../db/mysql');
const result = require("../utils/result");

// GET all menu items
router.get('/', (req, res) => {
  const sql = `SELECT item_id, name, description, price, isAvailable, created_at FROM menu_items`;
  pool.query(sql, (err, data) => {
    res.send(result.createResult(err, data));
  });
});

// GET specific menu item by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT item_id, name, description, price, isAvailable, created_at FROM menu_items WHERE item_id = ?`;

  pool.query(sql, [id], (err, data) => {
    if (err) {
      return res.send(result.createResult(err, null));
    }

    if (data.length === 0) {
      return res.send(result.createResult('Menu item not found', null));
    }

    res.send(result.createResult(null, data[0]));
  });
});

module.exports = router;

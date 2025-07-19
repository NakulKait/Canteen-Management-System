// const express=require('express');

// const router=express.Router();

// const pool = require('../db/mysql');
// const result=require("../utils/result");

// // Admin api for see the all orders of users

// router.get('/admin',(req,res)=>{
//   const sql=`select order_id ,user_id, token_id,total_price,Status,order_time,pickup_time from orders`;
//   pool.query(sql,(err,data)=>{
//     res.send(result.createResult(err,data));
//   })
// })

// // User Orders
// router.get('/',(req,res)=>{

//   const sql=`select order_id ,user_id, token_id,total_price,Status,order_time,pickup_time from orders where user_id=?`;
//   pool.query(sql,[req.headers.id],(err,data)=>{
//     res.send(result.createResult(err,data));
//   })
// })

// // place Order API
// router.post("/place",(req,res)=>{
//   const{total_price,token_id,status}=req.body;
//   const sql=`insert into orders (user_id,total_price,token_id,status) values (?,?,?,?)`;
//  pool.query(sql,[req.headers.id ,total_price,token_id,status],(err,data)=>{
//   res.send(result.createResult(err,data));
//  })
// })

// module.exports=router;

const express = require("express");
const router = express.Router();

const pool = require("../db/mysql");
const result = require("../utils/result");

// Admin - view all orders
router.get("/admin", (req, res) => {
  const sql = `
    SELECT order_id, user_id, token_id, total_price, status, order_time, pickup_time
    FROM orders
  `;
  pool.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.send(result.createResult(err.message, null));
    }
    res.send(result.createResult(null, data));
  });
});

// User - view own orders
router.get("/", (req, res) => {
  const userId = req.headers.id;
  if (!userId) {
    return res.send(result.createResult("Missing user ID in headers", null));
  }

  const sql = `
    SELECT order_id, user_id, token_id, total_price, status, order_time, pickup_time
    FROM orders
    WHERE user_id = ?
  `;
  pool.query(sql, [userId], (err, data) => {
    if (err) {
      console.error(err);
      return res.send(result.createResult(err.message, null));
    }
    res.send(result.createResult(null, data));
  });
});

// Place an order
router.post("/place", (req, res) => {
  const { total_price, token_id, status } = req.body;
  const userId = req.headers.id;

  if (!total_price || !token_id || !status || !userId) {
    return res.send(result.createResult("Missing required fields", null));
  }

  const sql = `
    INSERT INTO orders (user_id, total_price, token_id, status)
    VALUES (?, ?, ?, ?)
  `;
  pool.query(sql, [userId, total_price, token_id, status], (err, data) => {
    if (err) {
      console.error(err);
      return res.send(result.createResult(err.message, null));
    }
    res.send(result.createResult(null, data));
  });
});

module.exports = router;

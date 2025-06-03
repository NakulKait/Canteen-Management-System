const express=require('express');

const router=express.Router();

const pool = require('../db/mysql');
const result=require("../utils/result");

// Admin api for see the all orders of users

router.get('/admin',(req,res)=>{
  const sql=`select order_id ,user_id, token_id,total_price,Status,order_time,pickup_time from orders`;
  pool.query(sql,(err,data)=>{
    res.send(result.createResult(err,data));
  })
})

// User Orders
router.get('/',(req,res)=>{
      
  const sql=`select order_id ,user_id, token_id,total_price,Status,order_time,pickup_time from orders where user_id=?`;
  pool.query(sql,[req.headers.id],(err,data)=>{
    res.send(result.createResult(err,data));
  })
})

// place Order API
router.post("/place",(req,res)=>{
  const{total_price,token_id,status}=req.body;
  const sql=`insert into orders (user_id,total_price,token_id,status) values (?,?,?,?)`;
 pool.query(sql,[req.headers.id ,total_price,token_id,status],(err,data)=>{
  res.send(result.createResult(err,data));
 })
})


module.exports=router;
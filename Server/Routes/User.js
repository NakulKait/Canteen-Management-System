const express = require("express");
const router = express.Router();
//user defined

const pool = require("../db/mysql");
const result = require("../utils/result");

router.get("/", (request, response) => {
  const sql = `SELECT * FROM users`;
  pool.query(sql, (error, data) => {
    response.send(result.createResult(error, data));
  });
});

router.post("/SignIn", (request, response) => {
  const { email, password } = request.body;

  const sql = `SELECT * FROM USERS WHERE email = ? AND PASSWORD = ?`;

  pool.query(sql, [email, password], (error, data) => {
    if (data) {
      if (data.length == 0) {
        response.send(result.createErrorResult(error));
      } else {
        response.send(result.createSuccessResult(data));
      }
    } else {
      response.send(result.createErrorResult(error));
    }
  });
});

router.post("/SignUp", (request, response) => {
  const { name, email, password, Role } = request.body;
  const sql = `INSERT INTO users (name,email,password,Role)
  Values ("${name}","${email}","${password}","${Role}")`;
  pool.query(sql, (error, data) => {
    response.send(result.createResult(error, data));
  });
});

module.exports = router;

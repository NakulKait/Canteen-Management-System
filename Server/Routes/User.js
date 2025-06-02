const express = require("express");
const router = express.Router();
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

//user defined

const pool = require("../db/mysql");
const result = require("../utils/result");
const config = require("../utils/config");

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
        const payload = {
          id: data[0].user_id,
        };
        const token = jwt.sign(payload, config.secret);
        const body = {
          token: token,
          name: data[0].name,
          email: data[0].email,
        };
        response.send(result.createSuccessResult(body));
      }
    } else {
      response.send(result.createErrorResult(error));
    }
  });
});

router.post("/SignUp", (request, response) => {
  const { name, email, password, Role } = request.body;

  const encryptedPassword = cryptojs.SHA256(password).toString();

  const sql = `INSERT INTO users (name, email, password, Role) VALUES (?, ?, ?, ?)`;
  const values = [name, email, encryptedPassword, Role];

  pool.query(sql, values, (error, data) => {
    response.send(result.createResult(error, data));
  });
});

module.exports = router;

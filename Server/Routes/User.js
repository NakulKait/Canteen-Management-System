// const express = require("express");
// const router = express.Router();
// const cryptoJs = require("crypto-js");
// const jwt = require("jsonwebtoken");

// //user defined

// const pool = require("../db/mysql");
// const result = require("../utils/result");
// const config = require("../utils/config");

// router.get("/", (request, response) => {
//   const sql = `SELECT * FROM users`;
//   pool.query(sql, (error, data) => {
//     response.send(result.createResult(error, data));
//   });
// });

// router.post("/Signin", (request, response) => {
//   const { email, password } = request.body;

//   const sql = `SELECT * FROM USERS WHERE email = ? AND PASSWORD = ?`;

//   pool.query(sql, [email, password], (error, data) => {
//     if (data) {
//       if (data.length == 0) {
//         response.send(result.createErrorResult(error));
//       } else {
//         const payload = {
//           id: data[0].user_id,
//         };
//         const token = jwt.sign(payload, config.secret);
//         const body = {
//           token: token,
//           name: data[0].name,
//           email: data[0].email,
//         };
//         response.send(result.createSuccessResult(body));
//       }
//     } else {
//       response.send(result.createErrorResult(error));
//     }
//   });
// });

// router.post("/Signup", (request, response) => {
//   const { name, email, password, Role } = request.body;

//   const encryptedPassword = cryptoJs.SHA256(password).toString();

//   const sql = `INSERT INTO users (name, email, password, Role) VALUES (?, ?, ?, ?)`;
//   const values = [name, email, encryptedPassword, Role];

//   pool.query(sql, values, (error, data) => {
//     response.send(result.createResult(error, data));
//   });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

const pool = require("../db/mysql");
const result = require("../utils/result");
const config = require("../utils/config");

// ✅ Get all users (for testing/admin)
router.get("/", (req, res) => {
  const sql = `SELECT * FROM users`;
  pool.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.send(result.createErrorResult(err.message));
    }
    res.send(result.createSuccessResult(data));
  });
});

// ✅ SignUp route
router.post("/Signup", (req, res) => {
  const { name, email, password, Role } = req.body;

  if (!name || !email || !password || !Role) {
    return res.send(result.createErrorResult("Missing required fields"));
  }

  const encryptedPassword = cryptoJs.SHA256(password).toString();

  const sql = `INSERT INTO users (name, email, password, Role) VALUES (?, ?, ?, ?)`;
  const values = [name, email, encryptedPassword, Role];

  pool.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.send(result.createErrorResult(err.message));
    }
    res.send(result.createSuccessResult(data));
  });
});

// ✅ SignIn route
router.post("/Signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send(result.createErrorResult("Missing email or password"));
  }

  const encryptedPassword = cryptoJs.SHA256(password).toString();

  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  pool.query(sql, [email, encryptedPassword], (err, data) => {
    if (err) {
      console.error(err);
      return res.send(result.createErrorResult(err.message));
    }

    if (data.length === 0) {
      return res.send(result.createErrorResult("Invalid email or password"));
    }

    const payload = { id: data[0].user_id };
    const token = jwt.sign(payload, config.secret);

    const body = {
      token,
      name: data[0].name,
      email: data[0].email,
      role: data[0].Role,
    };

    res.send(result.createSuccessResult(body));
  });
});

module.exports = router;

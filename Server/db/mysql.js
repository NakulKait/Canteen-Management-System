const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "CanteenProject",
});

module.exports = pool;

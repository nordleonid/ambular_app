var express = require("express");
var router = express.Router();
const jsonParser = express.json();
const pool = require("../../module/db-config");

router.get('/', (req, res) => {
  pool.query("SELECT u.*, a.name as role FROM users u LEFT JOIN access a ON u.access_id = a.id", (err, data) => {
    if(err) return console.log(err);
    res.render("index.ejs", {
      users: data
    });
  });
});

module.exports = router;
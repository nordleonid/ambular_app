var express = require("express");
var router = express.Router();
const jsonParser = express.json();
const pool = require("../../module/db-config");



router.get('/create/', (req, res) => {
    pool.query("SELECT * FROM access", (err, data) => {
        //console.log(data);
        if(err) return console.log(err);
        res.render("user/createUser.ejs", {
        roles: data
        });
    });
});

router.get("/update/:id", function(req, res){
  const id = req.params.id;
  pool.query("SELECT * FROM users WHERE id=?", [id], (err, userData) => {
    if(err) return console.log(err);
    pool.query("SELECT * FROM access", (err, data) => {
      if(err) return console.log(err);
      console.log(data);
      res.render("user/updateUser.ejs", {
        user: userData[0],
        roles: data
      });
    });
  });
});






router.post("/", jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const access = req.body.access;
    console.log(access)
    pool.query(
        "INSERT INTO users (name, access_id) VALUES (?,?)", [name, access], (err, data) => {
            if (err) return console.log(`create error${err}`);
        }
    );  
  res.json("ok");
});

router.put("/:id", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const name = req.body.name;
  const access = parseInt(req.body.access, 10);
  const id = req.body.id;
  let dataAccess = null;
  console.log(req.body);
  pool.query(
    "SELECT * FROM access WHERE id = ?", [access], (err, data) => {
      if (err) return console.log(`update error ${err}`);
      dataAccess = parseInt(data[0].id, 10);
      //console.log(dataAccess);
      pool.query("UPDATE users SET name=?, access_id=? WHERE id=?", [name, dataAccess, id], (err, data) => {
          if (err) return console.log(`update error ${err}`);
        }
      );
    }
  ); 
  res.json("ok");
});

router.delete("/:id", function(req, res) {
  const id = req.params.id;
  //console.log(id);
  pool.query("DELETE FROM users WHERE id=?", [id], function(err, data) {
    if (err) return console.log(err);
  });
  res.json("ok");
});

module.exports = router;
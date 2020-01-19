const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "user-db-2",
  database: "2tabls",
  password: "1111"
});
 
const sql = `CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  access_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (access_id) REFERENCES access(id)
)`;
// INSERT INTO access (id, name) VALUES (1,"Guest");
// INSERT INTO access (id, name) VALUES (2,"Admin");
// INSERT INTO access (id, name) VALUES (3,"User");
   
// const sql = `CREATE TABLE access(
//   id int NOT NULL AUTO_INCREMENT,
//   name VARCHAR(255) NOT NULL,
//   PRIMARY KEY (id)
// )`;
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    else console.log("Таблица создана");
});
connection.end();


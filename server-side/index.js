const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ayoub1995",
  database: "evo_data",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected! 2");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/add_todo", function (req, res) {
  const titel = req.body.titel;
  const description = req.body.description;
  const sqlInsert = "INSERT INTO todo (titel, description) VALUES (?, ?)";

  db.query(sqlInsert, [titel, description], (err, result, fields) => {
    if (err) {
      console.log(err);
      res.send({ res: 0, err: err });
    } else {
      const insertedId = result.insertId;
      const sqlSelect = "SELECT * FROM todo WHERE todoId = ?";
      db.query(sqlSelect, [insertedId], (err, result, fields) => {
        if (err) {
          console.log(err);
          res.send({ res: 0, err: err });
        } else {
          for (r of result) {
            let datetime = new Date(r.create_datetime);
            r.create_datetime = datetime.toDateString();
          }
          res.send({ res: 1, data: result });
        }
      });
    }
  });
});

app.get("/api/get_all_todo", (req, res) => {
  const sqlSelect = "SELECT * FROM todo";
  db.query(sqlSelect, (err, result, fields) => {
    if (err) {
      console.log(err);
      res.send({ res: 0, err: err });
    } else {
      for (r of result) {
        let datetime = new Date(r.create_datetime);
        r.create_datetime = datetime.toDateString();
      }

      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

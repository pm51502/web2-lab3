const express = require("express");
var cors = require("cors");
const fs = require("fs");

const app = express();

let factsArr = [];
fs.readFile("facts.json", function (err, data) {
  var jsonData = data;
  var facts = JSON.parse(jsonData);

  for (let key in facts) {
    factsArr.push({
      number: key,
      fact: facts[key],
    });
  }
});

app.use(express.static("dist"));
app.use(cors());

app.get("/api/facts", function (req, res) {
  var sliced = factsArr.slice(0, 100);
  res.json(sliced);
});

app.get("/api/facts/:num", function (req, res) {
  var num = req.params.num;
  if (num > 1000) res.json({ fact: `${num} is a boring number.` });
  else res.json(factsArr.find((f) => f.number == num));
});

app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);
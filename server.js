const express = require("express");
const path = require("path");
var cors = require("cors");
const fs = require("fs");
const serveStatic = require('serve-static')

const app = express();
//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

//this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

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
  console.log(factsArr.length);
});

//app.use(express.static("dist"));
app.use(cors());

app.get("/facts", function (req, res) {
  var sliced = factsArr.slice(0, 100);
  res.json(sliced);
});

app.get("/facts/:num", function(req, res) {
  var num = req.params.num;
  if(num > 1000) 
    res.json({fact: `${num} is a boring number.`});
  else 
    res.json(factsArr.find(f => f.number == num));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);

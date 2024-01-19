var express = require("express");
var app = express();
let ejs = require("ejs");

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  ejs.renderFile("./views/pages/about.ejs", {}, {}, function (err, str) {
    res.send(str);
  });
});

app.get("/main", function (req, res) {
  ejs.renderFile("./views/pages/main.ejs", {}, {}, function (err, str) {
    res.send(str);
  });
});

app.listen(8080);
console.log("Server is listening on port 8080");

const express = require("express");

const cors = require("cors");
require("dotenv").config();

const path = require("path");
const mysql = require("mysql");
const ejs = require("ejs");

const exphbs = require("express-handlebars");
const app = express();
const upload = require("express-fileupload");
var bodyParser = require("body-parser");
require("dotenv").config();

var http = require("http").Server(app);
http.listen(process.env.ApiPort, function() {
    console.log("listening on *:" + process.env.ApiPort);
});

const port = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload());

app.listen(port, function(req, res) {
    console.log(`server is running on ${port}`);
});
app.use("/index", require("./controllers/index"));
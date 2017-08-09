const express = require("express");
const app = express();
const path = require("path");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");

app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({extended: false}));

app.use(require("./todo"));

app.listen(3000);

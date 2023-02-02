const express = require("express");
const mysql = require("mysql");
const db = require("./mysql_connect");
const query = require("./database/database");
const routes = require("./routes/routes.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const allowedExt = [
  ".js",
  ".ico",
  ".css",
  ".png",
  ".jpg",
  ".gif",
  ".jpeg",
  ".woff2",
  ".woff",
  ".ttf",
  ".svg",
  ".mp4",
];
app.engine("html", require("ejs").renderFile);
app.use(express.static(__dirname + "./build"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use("/api", routes);
// app.use("/", (req, res) => {
//   res.send(
//     `You have requested to connect the wrong API, Please check your API Url and try again.`
//   );
// });

const html = "./build/";
app.get("*", function (req, res, next) {
  if (allowedExt.filter((ext) => req.url.indexOf(ext) > 0).length > 0) {
    res.sendFile(path.resolve(`./build/${req.url}`));
  } else {
    res.sendFile("index.html", {
      root: html,
    });
  }
});

app.listen(8000, () => {
  console.log(`Example app listening at Port: ${8000}`);
});

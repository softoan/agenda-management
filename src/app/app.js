const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Static
app.use(express.static("public"));

//Settings
app.set("port", 8080);

//Middleware -->funciones que se ejecutan antes de llegar a la ruta
app.use(morgan("dev"));

/*Permite recibir datos de form*/
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

//Routes
app.use("/api", require("./routes/main.js"));

// 404 message error
app.use((req, res, next) => {
  res.status(404).send("<center><h1>404 Not found</h1></center>");
});

module.exports = app;

const express = require("express");
require("dotenv").config();
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// habilitar cors
app.use(cors());

// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// habilitar routing
app.use("/", routes());

module.exports = app;

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// localhost port is declared
const PORT = process.env.PORT || 8080;

const db = require("./models");

// create routes using express
const app = express();

// not sure what to put here yet
app.use(logger(""));

app.use(express.json());
app.use(express.static("public"));

// mongoose handles the schema 

// mongo is the db (database)
//===========================

// listen for port availability and then host 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})
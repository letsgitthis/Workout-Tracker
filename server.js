const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// localhost port is declared
const PORT = process.env.PORT || 8080;

const db = require("./models");

// create routes using express
const app = express();

// not sure what to put here yet
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

// routed pages
app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "./public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname, "./public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname, "./public/stats.html"));
});

// mongoose handles the schema 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",{
    useNewUrlParser: true
});

// mongo is the db (database)
//===========================

// listen for port availability and then host 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})
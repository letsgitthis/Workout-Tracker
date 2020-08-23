const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// localhost port
const PORT = process.env.PORT || 8080;

const db = require("./models");


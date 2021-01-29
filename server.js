const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000
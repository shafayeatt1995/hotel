// backend/index.js

const express = require("express");
require("module-alias/register");

const app = express();
app.use("/", require("@/backend/routes/index.js"));

module.exports = app;

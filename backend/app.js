const express = require('express')
const product = require("./routes/productRoute");
const errorMiddleware = require("./middleware/error")

const app = express();

//json middleware
app.use(express.json());

//route middleware
app.use("/api/v1",product);

//Error handler middleware
app.use(errorMiddleware);

module.exports = app
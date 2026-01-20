const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Backend working!");
});
app.listen(HTTP_PORT, () => {
  console.log(`server is running on: http://localhost:${HTTP_PORT}`);
});

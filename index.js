require("dotenv").config();
const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.send("<h1>Hello<h1/>");
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

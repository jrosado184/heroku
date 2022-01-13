require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(process.env.USERDOMAIN);
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

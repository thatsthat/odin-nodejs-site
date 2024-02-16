const express = require("express");
const app = express();
const port = 3000;
var fs = require("fs");
const url = require("url");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("*", function (req, res) {
  const filePath = __dirname + req._parsedUrl.pathname + ".html";
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.sendFile(__dirname + "/404.html");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

var http = require("http");
var fs = require("fs");
const { URL } = require("url");

http
  .createServer(function (req, res) {
    const myURL = req.url;
    if (myURL === "/") {
      var filename = "./index.html";
    } else {
      var filename = "." + myURL + ".html";
    }

    fs.readFile(filename, function (err, data) {
      if (data === undefined) {
        fs.readFile("./404.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080);

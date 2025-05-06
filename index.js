const http = require("http");
const fs = require("fs");

const server = http
  .createServer((request, response) => {
    let statusCode = 200;
    let content = "";
    let contentType = "text/html; charset=utf-8";
    // Index/Home
    if (request.url === "/") {
      fs.readFile("index.html", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        }
        response.writeHead(statusCode, { "Content-Type": contentType });
        response.end(data);
      });
      console.log(request.url);
      // About
    } else if (request.url === "/about") {
      fs.readFile("about.html", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        }
        response.writeHead(statusCode, { "Content-Type": contentType });
        response.end(data);
      });
      console.log(request.url);
      // Contact
    } else if (request.url === "/contact-me") {
      fs.readFile("contact-me.html", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        }
        response.writeHead(statusCode, { "Content-Type": contentType });
        response.end(data);
      });
      console.log(request.url);
      // 404
    } else {
      fs.readFile("404.html", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        }
        statusCode = 404;
        response.writeHead(statusCode, { "Content-Type": contentType });
        response.end(data + ": " + statusCode);
      });
      console.log(request.url);
    }
  })
  .listen(8080, () => {
    console.log("Listening now on port 8080 at http://localhost:8080");
  });

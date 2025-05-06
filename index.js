const http = require("http");
const fs = require("fs");
const { time } = require("console");

const server = http
  .createServer((request, response) => {
    let contentType = "text/html; charset=utf-8";
    const serveFile = (route, statusCode) => {
      // Helper function to serve files
      let messageTime = new Date().toLocaleString();
      fs.readFile(`${route}`, "utf-8", (err, data) => {
        // Read the file specified asynchronously
        if (err) {
          // If there's an error reading the file
          console.log(err); // log it to the console.
        }
        response.writeHead(statusCode, { "Content-Type": contentType }); // Set the HTTP status and headers
        response.end(data); // Send the file contents as a response
      });
      console.log(
        "Status Code: " +
          statusCode +
          " on URL " +
          request.url +
          " at " +
          messageTime
      ); // Log the requested URL and status code
    };
    // Index/Home
    if (request.url === "/") {
      serveFile("index.html", 200); // call our helper function with the input parameters for the route.s
      // Old callback function
      //   fs.readFile("index.html", "utf-8", (err, data) => {
      //     if (err) {
      //       console.log(err);
      //     }
      //     response.writeHead(statusCode, { "Content-Type": contentType });
      //     response.end(data);
      //   });
      //   console.log(request.url, statusCode);
      // About
    } else if (request.url === "/about") {
      serveFile("about.html", 200);
      // Contact
    } else if (request.url === "/contact-me") {
      serveFile("contact-me.html", 200);
      // 404
    } else {
      serveFile("404.html", 404);
      // Old 404 Logic
      //   fs.readFile("404.html", "utf-8", (err, data) => {
      //     if (err) {
      //       console.log(err);
      //     }
      //     statusCode = 404;
      //     response.writeHead(statusCode, { "Content-Type": contentType });
      //     response.end(data + ": " + statusCode);
      //   });
      //   console.log(request.url, statusCode);
    }
  })
  .listen(8080, () => {
    console.log("Listening now on port 8080 at http://localhost:8080");
  });

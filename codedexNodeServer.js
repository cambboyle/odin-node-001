const http = require("http");

const server = http.createServer((request, response) => {
  // Default response settings
  let statusCode = 200;
  let contentType = "text/html; charset=utf-8";
  let content = "";

  // Determine content based on the requested route
  if (request.url === "/") {
    content = "<h1>Home Page</h1><p>The most fun way to learn tech skills!</p>";
  } else if (request.url === "/about") {
    content =
      "<h1>About Page</h1><p>Codédex is a brand new way to learn to code online.</p>";
  } else if (request.url === "/contact") {
    content = "<h1>Contact Page</h1><p>Email us at help@codedex.io</p>";
  } else {
    // If the route doesn't match, send a 404 error
    statusCode = 404;
    content = "<h1>404 Not Found</h1><p>Page does not exist.</p>";
  }

  // Send the final response
  response.writeHead(statusCode, { "Content-Type": contentType });
  response.end(content);
});

server.listen(8080);

// const server = http
//   .createServer((request, response) => {
//     let statusCode = 200;
//     let contentType = "text/html; charset=utf-8";
//     let content = "";

//     if (request.url === "/") {
//       content = "<h1>Welcome to the Pokémon center!</h1>";
//     } else if (request.url === "/pikachu") {
//       content =
//         "<img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pokemon.com%2Fuk%2Fpokedex%2Fpikachu&psig=AOvVaw2EQWS2GKuZkRPFyPyOFVoZ&ust=1746448359713000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCIDZuKXpiY0DFQAAAAAdAAAAABAE'>";
//       console.log("Pika Pika");
//     } else if (request.url === "/sylveon") {
//       console.log("Sylv Sylv");
//     }
//   })
//   .listen(8080, () => {
//     console.log("Listening at http://localhost:8080");
//   });

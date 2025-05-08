const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact-me.html"));
});

app.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});

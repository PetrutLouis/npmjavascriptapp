const express = require("express");
const path = require("path");
const app = express();

// Define the path to the public directory
const publicPath = path.join(__dirname, "public");

// Serve static files from the 'public' directory
app.use(express.static(publicPath));

// Main routes
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(publicPath, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(publicPath, "contact.html"));
});

// Custom 404 page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(publicPath, "404.html"));
});

// Custom 500 page
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(publicPath, "503.html"));
});

// Set the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

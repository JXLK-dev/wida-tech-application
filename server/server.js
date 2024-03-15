const express = require("express");
const app = express();
const port = 8080;

// Define your routes here

app.get("/api/get", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

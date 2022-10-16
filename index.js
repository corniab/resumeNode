const express = require("express");
const path = require("path");
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Listen on port 5000
app.listen(5000, () => {
  console.log("⚡ [ server ] Listening at port 5000...");
});

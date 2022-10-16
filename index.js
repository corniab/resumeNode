const express = require("express");
const path = require("path");
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000, () => {
  console.log("server listening at port 5000");
});

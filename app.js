const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));

// Routes
const index = require("./routes/index");
const users = require("./routes/users");
app.use("/", index);
app.use("/users", users);

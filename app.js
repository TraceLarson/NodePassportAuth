const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

// EJS middleware
app.use(expressLayouts);
app.set("view engine", "ejs");

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));

// Routes
const index = require("./routes/index");
const users = require("./routes/users");
app.use("/", index);
app.use("/users", users);

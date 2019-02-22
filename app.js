const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

// Database Config
const db = require("./config/keys").MongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// EJS middleware
app.use(expressLayouts);
app.set("view engine", "ejs");

// Bodyparser middleware
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));

// Routes
const index = require("./routes/index");
const users = require("./routes/users");
app.use("/", index);
app.use("/users", users);

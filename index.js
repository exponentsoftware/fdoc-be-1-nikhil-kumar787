const express = require("express");
const mongoose = require("mongoose");

const env = require("dotenv");
env.config();

const todoRoute = require("./route/todoRoute");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send(" <h1> home Page </h1>");
  // res.render("home");
});

app.use("/todo", todoRoute);

// DB conection
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
});
mongoose.connection
  .once("open", function () {
    console.log("Connected to Mongo");
  })
  .on("error", function (err) {
    console.log("Mongo Error", err);
  });

app.listen(3000, () => {
  console.log("Server is up and running at the port 3000");
});

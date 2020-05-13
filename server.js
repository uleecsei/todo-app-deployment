const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const todoRoute = require("./server/routes/todo");
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

app.use("/api/todos", todoRoute);

app.use(express.static(__dirname + "/dist/ToDo-app"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/ToDo-app/index.html"));
});

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(server.address());
});

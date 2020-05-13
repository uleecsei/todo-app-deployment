const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const connectConfig =
  "mongodb+srv://uleecsei:4n8qMgU2bZXFxz9@cluster0-dz2dg.mongodb.net/test?retryWrites=true&w=majority";
const todoRoute = require("./server/routes/todo");

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(connectConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use("/api/todos", todoRoute);

app.use(express.static(__dirname + "/dist/ToDo-app"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/ToDo-app/index.html"));
});

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(server.address());
});

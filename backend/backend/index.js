const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/todoRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 8080;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.mongoDbUrl)
  .then(() => console.log(`Connected to MongoDb...`))
  .catch((e) => console.log(e));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));

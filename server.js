const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors =require("colors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

dotenv.config({ path: "./config/config.env" });
const connectDB = require('./config/dbConfig');
connectDB();

const products = require("./routes/Products");
const orders = require("./routes/Orders");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/", products);
app.use("/api/", orders);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
    )
  );
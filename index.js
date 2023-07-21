const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const NumberlistModel = require("./models/Numberslist");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.REACT_APP_DATABASE_URL);

app.get("/getNumbers", (req, res) => {
  NumberlistModel.find().then((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/creatNumber", async (req, res) => {
  const number = req.body;
  const newNumber = new NumberlistModel(number);
  await newNumber.save();

  res.json(number);
});

app.listen(3001, () => {
  console.log("Server running");
});

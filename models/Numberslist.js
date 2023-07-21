const mongoose = require("mongoose");

const NumberlistSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  }
});

const NumberlistModel = mongoose.model("numbers", NumberlistSchema);
module.exports = NumberlistModel;

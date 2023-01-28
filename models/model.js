const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  name: String,
  address: String,
});

const user = mongoose.model("usersnew", userschema);
module.exports = user;

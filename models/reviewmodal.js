const mongoose = require("mongoose");

const reviewschemna = new mongoose.Schema({
  review: String,
});

const review = mongoose.model("usrevieww", reviewschemna);
module.exports = review;

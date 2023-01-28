const review = require("./../models/reviewmodal");
exports.getreview = async (req, res) => {
  const reviews = await review.find();
  res.status(200).json({
    reviews: reviews,
  });
};

exports.createreview = async (req, res) => {
  const data = await review.create(req.body);
  res.status(200).json({
    message: "review created successfully",
    reviews: data,
  });
};
exports.deletereview = async (req, res) => {
  const data = await review.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "deleted successfully",
    reviews: null,
  });
};
exports.updatereview = async (req, res) => {
  const data = await review.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    message: "updated successfully",
    reviews: data,
  });
};

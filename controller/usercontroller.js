const user = require("./../models/model");
exports.getuser = async (req, res) => {
  const users = await user.find();
  res.status(200).json({
    users: users,
  });
};

exports.createuser = async (req, res) => {
  const data = await user.create(req.body);
  res.status(200).json({
    message: "user created successfully",
  });
};
exports.deleteuser = async (req, res) => {
  const data = await user.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "user deleted successfully",
  });
};

exports.updateuser = async (req, res) => {
  const data = await user.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    message: "user updated successfully",
  });
};

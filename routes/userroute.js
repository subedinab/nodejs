const usercontroller = require("./../controller/usercontroller");
const express = require("express");
const router = express.Router();

router.route("/").get(usercontroller.getuser).post(usercontroller.createuser);

router
  .route("/:id")
  .patch(usercontroller.updateuser)
  .delete(usercontroller.deleteuser);
module.exports = router;

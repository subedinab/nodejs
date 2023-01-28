const reviewcontroller = require("./../controller/reviewcontroller");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(reviewcontroller.getreview)
  .post(reviewcontroller.createreview);
router
  .route("/:id")
  .patch(reviewcontroller.updatereview)
  .delete(reviewcontroller.deletereview);
module.exports = router;

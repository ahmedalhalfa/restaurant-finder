const express = require("express");
const reviewControllers = require("../controllers/reviewsControllers");

const router = express.Router();

router.post("/:restaurantId/addReview", reviewControllers.addReview);

module.exports = router;

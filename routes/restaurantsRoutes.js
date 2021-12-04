const express = require("express");
const router = express.Router();
const restaurantsControllers = require("../controllers/restaurantsControllers");

router.get("/", restaurantsControllers.allRestaurants);

router.get(
  "/:restaurantId",
  restaurantsControllers.singleRestaurant
);

router.post("/", restaurantsControllers.addRestaurant);

router.put(
  "/:restaurantId",
  restaurantsControllers.updateRestaurant
);

router.delete("/:restaurantId", restaurantsControllers.deleteRestaurant);

module.exports = router;

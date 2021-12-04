const express = require("express");
const router = express.Router();
const restaurantsControllers = require("../controllers/restaurantsControllers");

router.get("/restaurants/", restaurantsControllers.allRestaurants);

router.get(
  "/restaurants/:restaurantId",
  restaurantsControllers.singleRestaurant
);

router.post("/restaurants", restaurantsControllers.addRestaurant);

router.put(
  "/restaurants/:restaurantId",
  restaurantsControllers.updateRestaurant
);

router.delete("/restaurants/:restaurantId", restaurantsControllers.deleteRestaurant);

module.exports = router;

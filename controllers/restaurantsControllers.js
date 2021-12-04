exports.allRestaurants = (req, res, next) => {
  res.status(200).json({
    data: {
      restaurants: ["mac", "kfc"],
    },
  });
};

exports.singleRestaurant = (req, res, next) => {
  res.status(200).json({
    data: {
      restaurant: "mcdonalds",
    },
  });
};

exports.addRestaurant = (req, res, next) => {
  res.status(201).json({
    data: {
      restaurant: "mcdonalds",
    },
  });
};

exports.updateRestaurant = (req, res, next) => {
  res.status(201).json({
    data: {
      restaurant: "mcdonalds",
    },
  });
};

exports.deleteRestaurant = (req, res, next) => {
  res.status(200).json({ message: "deleted the restaurant" });
};

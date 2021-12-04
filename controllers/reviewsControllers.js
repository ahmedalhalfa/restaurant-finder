const db = require("../db/index");

exports.addReview = async (req, res, next) => {
  try {
    const restaurantId = req.params.restaurantId;
    const name = req.body.name;
    const review = req.body.review;
    const rating = req.body.rating;

    const result = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *",
      [restaurantId, name, review, rating]
    );
    res.status(200).json({data: {
        review: result.rows[0]
    }})
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

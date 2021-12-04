const db = require("../db/index");

exports.allRestaurants = async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      data: {
        results: rows.length,
        restaurants: rows,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

exports.singleRestaurant = async (req, res, next) => {
  try {
    id = req.params.restaurantId;
    const { rows } = await db.query("SELECT * FROM restaurants WHERE id=$1", [
      id,
    ]);
    res.status(200).json({
      data: {
        restaurant: rows[0],
      },
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.addRestaurant = async (req, res, next) => {
  try {
    const name = req.body.name;
    const location = req.body.location;
    const price_range = req.body.price_range;
    const result = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *",
      [name, location, price_range]
    );
    res.status(201).json({
      msg: "added the restaurant successfully",
      restaurant: result.rows[0],
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateRestaurant = async (req, res, next) => {
  try {
    const restaurantId = req.params.restaurantId;
    let name, location, price_range;

    if (req.body.name) name = req.body.name;
    else {
      name = await db.query("SELECT name FROM restaurants WHERE id=$1", [
        restaurantId,
      ]);
      name = name.rows[0].name;
    }

    if (req.body.location) location = req.body.location;
    else {
      location = await db.query(
        "SELECT location FROM restaurants WHERE id=$1",
        [restaurantId]
      );
      location = location.rows[0].location;
    }

    if (req.body.price_range) price_range = req.body.price_range;
    else {
      price_range = await db.query(
        "SELECT price_range FROM restaurants WHERE id=$1",
        [restaurantId]
      );
      price_range = price_range.rows[0].price_range;
    }

    const results = await db.query(
      "UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4 returning *",
      [name, location, price_range, restaurantId]
    );
    res.status(201).json({
      data: {
        restaurant: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteRestaurant = async (req, res, next) => {
  const restaurantId = req.params.restaurantId;
  const results = await db.query(
    "DELETE FROM restaurants where id=$1 returning *",
    [restaurantId]
  );
  res
    .status(200)
    .json({ message: "deleted the restaurant", data: results.rows });
};

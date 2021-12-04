const express = require("express");
const restaurantsRoutes = require("./routes/restaurantsRoutes");
const reviewsRoutes = require("./routes/reviewsRoutes");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/restaurants", restaurantsRoutes);
app.use("/api/v1/reviews", reviewsRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is up and listening on port 8080 ...");
});

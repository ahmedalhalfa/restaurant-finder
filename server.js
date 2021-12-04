const express = require("express");
const restaurantsRoutes = require("./routes/restaurantsRoutes");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", restaurantsRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is up and listening on port 8080 ...");
});

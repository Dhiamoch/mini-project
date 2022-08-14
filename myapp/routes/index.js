const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("index.ejs");
});

const movieRoute = require("./movie");
route.use("/movies", movieRoute);
// const shipRoutes = require("./ship");
// route.use("/ships", shipRoutes);

module.exports = route;

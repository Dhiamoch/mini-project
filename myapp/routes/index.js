const MovieController = require("../controllers/MovieController");
const route = require("express").Router();

route.get("/", MovieController.getMovies);

const movieRoute = require("./movie");
route.use("/movies", movieRoute);
// const shipRoutes = require("./ship");
// route.use("/ships", shipRoutes);

module.exports = route;

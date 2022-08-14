const MovieController = require("../controllers/MovieController");
const route = require("express").Router();

route.get("/", MovieController.getMovies);

const movieRoute = require("./movie");
route.use("/movies", movieRoute);

module.exports = route;

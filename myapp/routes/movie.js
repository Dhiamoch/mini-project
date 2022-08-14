const movieRoute = require("express").Router();
const MovieController = require("../controllers/MovieController");

// movieRoute.get("/", MovieController.getMovies);
movieRoute.post("/create", MovieController.add);
movieRoute.get("/delete/:id", MovieController.delete);
movieRoute.post("/update/:id", MovieController.update);
// pirateRoute.post("/update/:pirateId", pirateController.update);

module.exports = movieRoute;

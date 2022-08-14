const { movie } = require("../models");

class MovieController {
  static async getMovies(req, res) {
    try {
      let movies = await movie.findAll({
        order: [["id", "asc"]],
      });
      res.render("index.ejs", { movies });
    } catch (err) {
      res.json(err);
    }
  }

  static async add(req, res) {
    try {
      const { title, image, description, duration, genre } = req.body;
      let result = await movie.create({
        title,
        image,
        description,
        duration,
        genre,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await movie.destroy({
        where: { id },
      });
      result === 1
        ? res.json({
            message: `movie id ${id} has been deleted`,
          })
        : res.json({
            message: `movie id ${id} failed to be deleted`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { title, image, description, duration, genre } = req.body;
      let result = await movie.update(
        {
          title,
          image,
          description,
          duration,
          genre,
        },
        {
          where: { id },
        }
      );
      result[0] === 1
        ? res.json({
            message: `movie id ${id} has been updated`,
          })
        : res.json({
            message: `movie id ${id} has failed to update`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  // static async updatePage(req, res) {
  //   try {
  //     const id = +req.params.pirateId;
  //     let resultPirate = await pirates.findByPk({
  //       where: { id },
  //     });
  //     res.render("updatePagePirate.ejs", { pirates: resultPirate });
  //   } catch (err) {
  //     res.send(err);
  //   }
  // }
}

module.exports = MovieController;

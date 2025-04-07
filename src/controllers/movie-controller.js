import { Router } from "express";
import movieService from "../service/movie-service.js";

const movieController = Router();

movieController.get("/search", (req, res) => {
  const movies = movieService.getAll();
  res.render("search", { movies });
});

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.post("/create", (req, res) => {
  const newMovie = req.body;

  // Creating a movie
  const movieId = movieService.create(newMovie);

  console.log(movieId);
  console.log(newMovie);

  res.redirect("/");
});

movieController.get("/:movieId/details", (req, res) => {
  const movieId = req.params.movieId;

  const movie = movieService.findMovie(movieId);
  console.log(movie);

  res.render("details", { movie });
});

export default movieController;

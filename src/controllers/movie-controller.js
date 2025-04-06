import { Router } from "express";
import { findMovie } from "../service/movie-service.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.get("/:movieId/details", (req, res) => {
  const movieId = req.params.movieId;

  const movie = findMovie(movieId);
  console.log(movie);

  res.render("details");
});

export default movieController;

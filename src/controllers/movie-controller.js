import { Router } from "express";
import movieService from "../service/movie-service.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.post("/create", (req, res) => {
  console.log("POST MOVIE");

  console.log(req.body);

  res.end();
});

movieController.get("/:movieId/details", (req, res) => {
  const movieId = req.params.movieId;

  const movie = movieService.findMovie(movieId);
  console.log(movie);

  res.render("details", { movie });
});

export default movieController;

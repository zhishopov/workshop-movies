import { Router } from "express";
import movieService from "../service/movie-service.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
  // *1st solution
  // const movies = await movieService.getAll().lean();

  // *2nd solution (with runtimeOptions setup in index.js)
  const movies = await movieService.getAll();

  res.render("home", { movies });
});

homeController.get("/about", (req, res) => {
  res.render("about");
});

export default homeController;

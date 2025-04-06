import { Router } from "express";
import movies from "../movies.js"; // Temporary solution

const homeController = Router();

homeController.get("/", (req, res) => {
  res.render("home", { movies });
});

homeController.get("/about", (req, res) => {
  res.render("about");
});

homeController.get("/search", (req, res) => {
  res.render("search");
});

export default homeController;

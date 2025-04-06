import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/search", (req, res) => {
  res.render("search");
});

export default router;

import { Router } from "express";
import homeController from "./controllers/home-controller.js";

const routes = Router();

routes.use(homeController);

routes.get("/create", (req, res) => {
  res.render("create");
});

routes.get("/details", (req, res) => {
  res.render("details");
});

// router.get("/hello", (req, res) => {
//   res.render("404");
// });

export default routes;

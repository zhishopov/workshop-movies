import express from "express";
import handlebars from "express-handlebars";

import routes from "./routes.js";
import showRatingHelper from "./helpers/rating-helper.js";
import mongoose from "mongoose";

const app = express();

// db configuration
try {
  const uri = "mongodb://localhost:27017/movies-magic";
  await mongoose.connect(uri);
} catch (error) {
  console.log("Cannot connect to DB!");
  console.error(error.message);
}

// handlebars configuration
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    helpers: {
      showRating: showRatingHelper,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");

// express configuration
app.use("/static", express.static("src/public"));
app.use(express.urlencoded({ extended: false })); // Teach express how to read form data

// add routes
app.use(routes);

app.listen(3000, () =>
  console.log("Server is listening on http://localhost:3000...")
);

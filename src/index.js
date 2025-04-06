import express from "express";
import handlebars from "express-handlebars";

const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use("/static", express.static("src/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () =>
  console.log("Server is listening on http://localhost:3000...")
);

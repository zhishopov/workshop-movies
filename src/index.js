import express from "express";
import handlebars from "express-handlebars";

const app = express();

app.engine(
  express.engine(
    "hbs",
    handlebars.engine({
      extname: "hbs",
    })
  )
);
app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("It works");
});

app.listen(3000, () =>
  console.log("Server is listening on http://localhost:3000...")
);

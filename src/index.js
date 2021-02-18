const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const post = 3000;

app.use(morgan(`combined`));

app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(post, () => console.log(`app listening http://localhost:${post}`));

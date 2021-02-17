const express = require("express");
const app = express();
const post = 3000;

app.get("/", (req, res) => {
  return res.send("hello work1");
});

app.listen(post, () => console.log(`app listening http://localhost:${post}`));

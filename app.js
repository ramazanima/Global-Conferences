const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();
const sessionsRouter = require("./src/routers/sessionsRouter")

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");



app.use("/sessions", sessionsRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Web app", data: ["Bio", "Chem", "Hydro"], names: ["Ali", "Gagan", "Bishal"] });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  debug("Debugging mode");
});

const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const data = require("./src/data/sessions.json");

const PORT = process.env.PORT || 3000;

const app = express();
const sessionsRouter = express.Router();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

sessionsRouter.route("/")
  .get((req, res) => {
    res.render("sessions", { sessions: data }); // Pass the 'sessions' data to the template
  });

sessionsRouter.route("/1")
  .get((req, res) => {
    res.send("single session");
  });

app.use("/sessions", sessionsRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Web app", data: ["Bio", "Chem", "Hydro"], names: ["Ali", "Gagan", "Bishal"] });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  debug("Debugging mode");
});

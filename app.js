const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const PORT = process.env.PORT || 4000;
const app = express();
const sessionsRouter = require("./src/routers/sessionsRouter");
const adminRouter = require("./src/routers/adminRouter");
const authRouter = require("./src/routers/authRouter");

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));
app.use(express.json());
app.use(express.urlencoded({urlencoded: false}));
app.use(cookieParser());
app.use(session({ secret: "globomantics" }));

require("./src/config/passport.js")(app);

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");



app.use("/sessions", sessionsRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Web app", data: ["Bio", "Chem", "Hydro"], names: ["Ali", "Gagan", "Bishal"] });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  debug("Debugging mode");
});

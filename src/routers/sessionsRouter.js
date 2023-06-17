const express = require("express");
const data = require("../data/sessions.json");

const sessionsRouter = express.Router();


sessionsRouter.route("/").get((req, res) => {
    res.render("sessions", 
    { sessions: data }); // Pass the 'sessions' data to the template
  });

sessionsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("session", {
        session: data[id],
    });
  });

  module.exports = sessionsRouter;
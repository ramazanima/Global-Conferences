const express = require("express");
const data = require("../data/sessions.json");

const debug = require("debug")("app:sessionsRouter");
const { MongoClient, ObjectId } = require("mongodb");

const sessionsRouter = express.Router();

sessionsRouter.route("/").get(async (req, res) => {
  const url =
    "mongodb+srv://ramazanim:NLTuPDLq0v8kLT3G@globomantrics.ig51dfh.mongodb.net/?retryWrites=true&w=majority";
  const dbName = "globomantics";

  try {
    const client = await MongoClient.connect(url);
    debug("Connected to MongoDB");

    const db = client.db(dbName);
    const sessions = await db.collection("data").find().toArray();

    debug("Data fetched from the database:", sessions);

    res.render("sessions", { sessions });
  } catch (error) {
    debug("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Failed to connect to the database" });
  }
});

sessionsRouter.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const url =
    "mongodb+srv://ramazanim:NLTuPDLq0v8kLT3G@globomantrics.ig51dfh.mongodb.net/?retryWrites=true&w=majority";
  const dbName = "globomantics";

  try {
    const client = await MongoClient.connect(url);
    debug("Connected to MongoDB");

    const db = client.db(dbName);
    const session = await db.collection("data").findOne({ _id: new ObjectId(id) });

    debug("Data fetched from the database:", session);

    res.render("session", {
      session: session,
    });
  } catch (error) {
    debug("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Failed to connect to the database" });
  }
});

module.exports = sessionsRouter;

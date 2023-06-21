const express = require("express");
const debug = require("debug")("app:adminRouter");
const { MongoClient } = require("mongodb");

const authRouter = express.Router();

authRouter.route("/signUp").post((req, res) => {
  // create user
  const { username, password } = req.body;
  const url =
    "mongodb+srv://ramazanim:NLTuPDLq0v8kLT3G@globomantrics.ig51dfh.mongodb.net/?retryWrites=true&w=majority";
  const dbName = "globomantics";

  (async function addUser() {
    let client;
    try {
      client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const user = { username, password };
      const results = await db.collection("users").insertOne(user);
      debug(results);
      req.login(results.ops[0], () => {
        res.redirect("/auth/profile");
      });
    } catch (error) {
      debug(error);
    } finally {
      if (client) {
        client.close();
      }
    }
  })();
});

authRouter.route("/profile").get((req, res) => {
  res.json(req.user);
});

module.exports = authRouter;

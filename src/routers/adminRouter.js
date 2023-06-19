const express = require("express");
const debug = require("debug")("app:adminRouter");
const { MongoClient } = require("mongodb");

const data = require("../data/sessions.json");

const adminRouter = express.Router();

adminRouter.route("/").get(async (req, res) => {
//   const url = "mongodb+srv://ramazanim:NLTuPDLq0v8kLT3G@globomantrics.ig51dfh.mongodb.net/?retryWrites=true&w=majority";
//   const dbName = "globomantics";

//   try {
//     const client = await MongoClient.connect(url);
//     debug("Connected to MongoDB");

//     const db = client.db(dbName);

//     const response = await db.collection("data").insertMany(data);

//     debug("Data inserted into the database:", response);

//     res.json(response);
//   } catch (error) {
//     debug("Error connecting to MongoDB:", error);
//     res.status(500).json({ error: "Failed to connect to the database" });
//   }
});

module.exports = adminRouter;

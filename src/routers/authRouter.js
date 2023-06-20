const express = require("express");
const debug = require("debug")("app:adminRouter");
const { MongoClient } = require("mongodb");

const authRouter = express.Router();

authRouter.route("/signUp").post((req, res) =>{
    res.json(req.body);
})


module.exports = authRouter;
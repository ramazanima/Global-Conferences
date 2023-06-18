const express = require("express");
const debug = require("debug")("app:adminRouter");
// const mongodb = require("mongodb");
const {MongoClient} = require("mongodb");

const data = require("../data/sessions.json");


const adminRouter = express.Router();

adminRouter.route("/").get((req, res) => {
    const url = "mongodb+srv://ramazanim:UsA10010110@cluster0.u8nd9pi.mongodb.net/";
    const dbName = "globomantics"; 
    (async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(url);
            debug("Connected to mongo DB");

            const db= client.db(dbName);

            const response = await db.collection("sessions").insertMany(sessions);

            res.json(response);
        }
        catch(error){
            debug(error.stack);
        }
    } ())
});


module.exports = adminRouter; 
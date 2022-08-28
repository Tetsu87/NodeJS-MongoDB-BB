const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
var config = require("./config");
const Thread = require("./models/Thread");

app.use(express.json());
app.use(express.static("public"));

mongoose.connect(config.mongoConnect)
.then(() => console.log("DB connected!!"))
.catch((err) => console.log(err));

// get method
app.get("/api/v1/threads", async(req,res) => {
    try {
        const allThreads = await Thread.find({});
        res.status(200).json(allThreads);
    } catch (err) {
        console.log(err);
    }
});

// post method
app.post("/api/v1/thread", async(req,res) => {
    try {
        const createThread = await Thread.create(req.body);
        res.status(200).json(createThread);
    } catch (err) {
        console.log(err);
    }
});



app.listen(PORT, () => {
    console.log("server is running!!")
});



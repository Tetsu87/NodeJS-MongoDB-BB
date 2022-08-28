const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
var config = require("./config");

app.use(express.static("public"));

mongoose.connect(`mongodb+srv://TK:${config.mongoPW}@cluster0.szjqwe3.mongodb.net/threads?retryWrites=true&w=majority`)
.then(() => console.log("DB connected!!"))
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log("server is running!!")
});



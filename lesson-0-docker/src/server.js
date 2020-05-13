const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

const connection = "mongodb://mongo:27017/mongo-test";

app.get("/", (req, res) => {
    res.send("Hello from Node.js app \n");
});

try {
    mongoose.connect(connection);

} catch (error) {
    console.log(error)
}

app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);
});
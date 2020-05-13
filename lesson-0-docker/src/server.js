const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const RegisterController = require('./controllers/RegisterController')
const app = express();
const PORT = 8080;



app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

app.get("/", (req, res) => {
    res.send("Hello from Node.js app \n");
});

app.get("/register", (req, res) => {
    res.send("Welcome to Register \n");
});

app.post("/register",RegisterController.store)

try {
    mongoose.connect(
        process.env.MONGO_DB_SECRET,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    console.log('MongoDb connected successfully!')


} catch (error) {
    console.log(error)
}

app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);
});
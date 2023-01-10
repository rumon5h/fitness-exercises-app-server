const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const colors = require("colors");

// middleware
app.use(express.json());
app.use(cors());

// connection to database
mongoose.connect(process.env.DATABASE).then( () => {
    console.log('Database connected successfully!'.green.bold);
});


app.get("/", (req, res) => {
  res.write(`<h1>Hello world!</h1>`);
  res.end();
});

app.listen(PORT, () => {
  console.log("Server is listening on port".yellow.bold, PORT);
});


const exerciseRoute = require("./v1/routes/exercises.route");

app.use('/api/v1/exercises', exerciseRoute);
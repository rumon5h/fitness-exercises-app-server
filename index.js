const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

console.log(process.env.DATABASE);

mongoose.connect(process.env.DATABASE).then( () => {
    console.log('Database connected successfully!');
});


app.get("/", (req, res) => {
  res.write(`<h1>Hello world!</h1>`);
  res.end();
});

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});



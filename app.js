//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const routes = require('./routes');
const post = require('./post.js');


const products = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  price: Number
});

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true
});

const app = express();

app.use(routes);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.listen(5000, function() {
  console.log("Server started on port 5000");
  post.addPost("majd is the title", "hasan")
});

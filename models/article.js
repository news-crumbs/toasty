const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  synopsis: String,
  url: { type: String, required: true },
  image: { type: String, required: true },
 
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

/*
headline/title
author from url if it becomes easy to display
synopsis
url to full article
link to Image
  fullsize image displayed on front-end for article detail page

*/
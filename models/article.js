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

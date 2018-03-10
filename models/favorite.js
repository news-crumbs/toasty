var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
// Using the Schema constructor, create a new FavoriteSchema object
// This is similar to a Sequelize model
var FavoriteSchema = new Schema({
  // `title` must be of type String
  title: String,
  author: { type: String, required: false },
  synopsis: String,
  url: { type: String, required: true },
  image: { type: String, required: false }
  
});
// This creates our model from the above schema, using mongoose's model method
var Favorite = mongoose.model("Saved", FavoriteSchema);
// Export the Note model
module.exports = Favorite;
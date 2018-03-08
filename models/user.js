const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nom: { 
      type: String, 
      required: true,
      min: [6],
      max: 119 
  },
  password: { 
      type: String, 
      required: false,
      min: [6],
      max: 119
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
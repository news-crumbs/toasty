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
      required: true,
      min: [6],
      max: 119
  },

  favorites: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the article model
      ref: "Saved"
    }
  ]
});


const User = mongoose.model("User", userSchema);

module.exports = User;
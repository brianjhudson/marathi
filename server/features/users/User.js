const mongoose = require("mongoose");

const User = new mongoose.Schema({
  facebook_id: {type: String, required: true, unique: true}
  , name: {type: String, required: true}
  , email: {type: String, unique: true}
  , photo: { type: String, default: 'http://www.clker.com/cliparts/m/3/I/C/c/2/grey-silhouette-of-man.svg' }
  // , lessons: [{type: string}]
});

module.exports = mongoose.model("User", User);

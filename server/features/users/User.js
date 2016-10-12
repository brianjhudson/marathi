const mongoose = require("mongoose");

const User = new mongoose.Schema({
  facebook_id: {type: String, required: true, unique: true}
  , name: {type: String, required: true}
  , email: {type: String, unique: true}
});

module.exports = mongoose.model("User", User);

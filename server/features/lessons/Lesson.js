const mongoose = require('mongoose')
  , Term = require("./Term")
  , User = require("../users/User");

const Lesson = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    , title: {type: String, required: true}
    , description: {type: String}
    , source: {type: String}
    , image: {type: String}
    , terms: [{type: mongoose.Schema.Types.ObjectId, ref: "Term"}]
  })

module.exports = mongoose.model("Lesson", Lesson)

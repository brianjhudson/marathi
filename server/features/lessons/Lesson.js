const mongoose = require('mongoose')
  , Term = require("./Term")
  , Lesson = new mongoose.Schema({
      title: {type: String, required: true}
    , caption: {type: String}
    , explanation: {type: String}
    , terms: [{type: mongoose.Schema.Types.ObjectId, ref: "Term"}]
  })

module.exports = mongoose.model("Lesson", Lesson)

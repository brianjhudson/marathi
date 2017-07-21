const mongoose = require('mongoose')
  , Term = require("./Term")
  , Quiz = new mongoose.Schema({
      title: {type: String, required: true}
    , caption: {type: String}
    , description: {type: String}
    , source: {type: String}
    , image: {type: String}
    , terms: [{type: mongoose.Schema.Types.ObjectId, ref: "Term"}]
  })

module.exports = mongoose.model("Quiz", Quiz);

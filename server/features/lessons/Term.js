const mongoose = require('mongoose')
  , Term = new mongoose.Schema({
      term: {type: String, trim: true, required: true}
    , transliteration: {type: String, trim: true}
    , explanation: {type: String}
    , category: {type: String, enum: ["grammar", "alphabet", "vocabulary"]}
    , theme: {type: String}
    , example: {
        use: {type: String}
        , transliteration: {type: String}
        , translation: {type: String}
      }
    })

module.exports = mongoose.model("Term", Term)

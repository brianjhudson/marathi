const mongoose = require('mongoose')
  , Term = new mongoose.Schema({
      term: {type: String, trim: true, required: true}
    , transliteration: {type: String, trim: true}
    , explanation: {type: String}
    , category: {type: String, enum: ["grammar", "alphabet", "vocabulary", "culture"]}
    , theme: {type: String}
    , image: {type: String}
    , sound: {type: String}
    , example: {
        use: {type: String}
        , transliteration: {type: String}
        , translation: {type: String}
      }
    , reviewQuestion: {
        question: {type: String}
        , answer: {type: String}
    }
    })

module.exports = mongoose.model("Term", Term)

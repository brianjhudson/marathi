const mongoose = require('mongoose')
  , Term = new mongoose.Schema({
      author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    , authorImage: {type: String}
    , language: {type: String, trim: true, required: true}
    , term: {type: String, trim: true, required: true}
    , transliteration: {type: String, trim: true}
    , explanation: {type: String, required: true}
    , category: {type: String, enum: ["grammar", "alphabet", "vocabulary", "culture"], required: true}
    , topic: {type: String}
    , theme: {type: String}
    , lesson: {type: mongoose.Schema.Types.ObjectId, ref: "Lesson"}
    , image: {type: String}
    , imageCredit: {type: String}
    , sound: {type: String}
    , example: {type: String}
    , exampleTransliteration: {type: String}
    , exampleTranslation: {type: String}
    , reviewQuestion: {type: String}
    , reviewAnswer: {type: String}
    , reviewAnswerType: {type: String, enum: ['term', 'transliteration', 'definition', 'translation']}
    , reviewImage: {type: String}

  })

module.exports = mongoose.model("Term", Term)

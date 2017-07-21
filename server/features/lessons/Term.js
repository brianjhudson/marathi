const mongoose = require('mongoose')
  , Term = new mongoose.Schema({
      author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    , language: {type: String, trim: true, required: true}
    , term: {type: String, trim: true, required: true}
    , transliteration: {type: String, trim: true}
    , explanation: {type: String, required: true}
    , category: {type: String, enum: ["grammar", "alphabet", "vocabulary", "culture"], required: true}
    , topic: {type: String, trim: true}
    , theme: {type: String, trim: true}
    , lesson: {type: mongoose.Schema.Types.ObjectId, ref: "Lesson"}
    , image: {type: String, trim: true}
    , imageCredit: {type: String, trim: true}
    , sound: {type: String, trim: true}
    , example: {type: String, trim: true}
    , exampleTransliteration: {type: String, trim: true}
    , exampleTranslation: {type: String, trim: true}
    , reviewQuestion: {type: String, trim: true}
    , reviewAnswer: {type: String, trim: true}
    , reviewAnswerType: {type: String, enum: ['term', 'transliteration', 'definition', 'translation']}
    , reviewImage: {type: String, trim: true}
    , reviewImageCredit: {type: String, trim: true}

  })

module.exports = mongoose.model("Term", Term);

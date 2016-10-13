const mongoose = require("mongoose")
    , Lesson = require("../lessons/Lesson")
    , Quiz = require("../lessons/Lesson");

const User = new mongoose.Schema({
  facebook_id: {type: String, required: true, unique: true}
  , name: {type: String, required: true}
  , email: {type: String, unique: true}
  , photo: { type: String, default: 'http://www.clker.com/cliparts/m/3/I/C/c/2/grey-silhouette-of-man.svg' }
  , dateJoined: {{type: Date, default: new Date()}}
  , lessons: [{type: mongoose.Schema.Types.ObjectId, ref: "Lesson"}]
  , quizzes: [{type: mongoose.Schema.Types.ObjectId, ref: "Quiz"}]
  // , reviewItems: [{type: mongoose.Schema.Types.ObjectId, ref: "ReviewItems"}]
});

module.exports = mongoose.model("User", User);

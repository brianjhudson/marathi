const mongoose = require("mongoose")
    , Lesson = require("../lessons/Lesson");

const User = new mongoose.Schema({
  facebook_id: {type: String}
  , name: {type: String, required: true}
  , email: {type: String}
  , photo: {type: String, default: 'http://www.clker.com/cliparts/m/3/I/C/c/2/grey-silhouette-of-man.svg'}
  , dateJoined: {type: Date, default: new Date()}
  , lastLogin: {type: Date, default: new Date()}
  , dayStreak: {type: Number, default: 0}
  , returning: {type: Boolean, default: false}
  , selectedLesson: {
      lessonId: {type: mongoose.Schema.Types.ObjectId, ref: "Lesson"}
      , completed: {type: Boolean, default: false}
      , score: {type: Number, default: 0}
      , currentTerm: {type: Number, default: 0}
  }
  , lessons: [{
      lessonId: {type: mongoose.Schema.Types.ObjectId, ref: "Lesson"}
      , completed: {type: Boolean, default: false}
      , score: {type: Number, default: 0}
      , currentTerm: {type: Number, default: 0}
    }]
  , reviewItems: [{type: mongoose.Schema.Types.ObjectId, ref: "Term"}]
  , termsCreated: [{type: mongoose.Schema.Types.ObjectId, ref: "Term"}]
  , lessonsCreated: [{type: mongoose.Schema.Types.ObjectId, ref: "Lesson"}]

});

module.exports = mongoose.model("User", User);

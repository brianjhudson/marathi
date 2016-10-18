const Lesson = require("./Lesson")
    , Term = require("./Term");

module.exports = {

	postLesson(req, res) {
    new Lesson(req.body).save((err, lesson) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(lesson);
      });
	}

  , postTerm(req, res) {
      new Term(req.body).save((err, term) => {
        console.log(err);
        if (err) return res.status(500).json(err);
        return res.status(200).json(term);
    });
  }

  , getLessonById(req, res) {
    if (!req.params.id) return res.status(500).json("Lesson Id required")
    Lesson.find({}, (err, lessons) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(lessons);
      })
  }

  , getLessons(req, res) {
      Lesson.find(req.params.id)
      .populate("terms")
      .exec((err, lessons) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(lessons);
      })
  }


};

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
      console.log("post Term route executed");
      new Term(req.body).save((err, term) => {
        console.log(err);
        if (err) return res.status(500).json(err);
        return res.status(200).json(term);
    });
  }

};

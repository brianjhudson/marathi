const Lesson = require("./Lesson");

module.exports = {

	postLesson(req, res) {
    new Lesson(req.body).save((err, lesson) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(lesson);
      });
	}

};

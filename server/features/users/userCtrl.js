const User = require("./User");

module.exports = {

	getUser(req, res) {
		User.findById(req.user._id)
		.populate("lessons")
		.populate("selectedLesson.lessonId")
		.populate("reviewItems")
		.populate("termsCreated")
		.populate("lessonsCreated")
		.exec((err, user) => {
			console.log("Get User Error: ", err);
			if (err) return res.status(500).json(err);
			return res.status(200).json(user);
		})
	}

	, logoutUser(req, res) {
      req.logout();
      res.redirect('/');
  }

	, selectUserLesson(req, res) {
			User.findByIdAndUpdate(req.user._id, {$set: {selectedLesson: req.body.id}}, (err, user) => {
				if (err) return res.status(500).json(err);
				return res.status(200).json(user);
			});
	}
	, saveUserLesson(req, res) {
			console.log("Lesson: ", req.body);
			console.log("Saving lesson...");
			User.findByIdAndUpdate(req.user._id, {$set: {lessons: req.body}}, (err, user) => {
					console.log("Error: ", err);
					console.log("User: ", user);
					if (err) return res.status(500).json(err);
					return res.status(200).json(user);

			})
	}
};

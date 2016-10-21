const User = require("./User");

module.exports = {

	getUser(req, res) {
		User.findById(req.user._id)
		.populate("lessons.lessonId")
		.populate("selectedLesson.lessonId")
		// .populate("reviewItems")
		// .populate("termsCreated")
		// .populate("lessonsCreated")
		.exec((err, user) => {
			console.log(err);
			console.log(user);
			if (err) return res.status(500).json(err);
	//  TODO: Check for last login and add dayStreak
			return res.status(200).json(user);
		})
	}

	, logoutUser(req, res) {
      req.logout();
      res.redirect('/');
  }

	, selectUserLesson(req, res) {
		console.log("SelectedLesson: ", req.body)
			User.findByIdAndUpdate(req.user._id, {$set: {selectedLesson: req.body.id}}, (err, user) => {
				console.log("Error: ", err)
				console.log("User: ", user)
				if (err) return res.status(500).json(err);
				return res.status(200).json(user);
			});
	}
	, saveUserLesson(req, res) {
			// console.log("Lesson: ", req.body);
			// console.log("Saving lesson...");
			User.findOneAndUpdate({_id: req.user._id, lessons: {_id: req.body.id}}, {$set: {
					"lessons.$.score": req.body.score
				, "lessons.$.completed": req.body.completed
				, "lessons.$.currentTerm": req.body.currentTerm}}, (err, user) => {
					// console.log("Error: ", err);
					// console.log("User: ", user);
					if (err) return res.status(500).json(err);
					return res.status(200).json(user);

			})
	}
};

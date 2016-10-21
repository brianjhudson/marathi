const User = require("./User");

module.exports = {

	getUser(req, res) {
		User.findById(req.user._id)
		.populate("lessons")
		// .populate("reviewItems")
		// .populate("termsCreated")
		// .populate("lessonsCreated")
		.exec((err, user) => {
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
			User.findByIdAndUpdate(req.user._id, {$set: {"selectedLesson": req.body.id}}, (err, user) => {
				if (err) return res.status(500).json(err);
				return res.status(200).json(user);
			});
	}
	, saveUserLesson(req, res) {
		User.findOneAndUpdate({_id: req.user._id, lessons: {_id: req.body.id}}, {$set: {
				"lessons.$.score": req.body.score
			, "lessons.$.completed": req.body.completed
			, "lessons.$.currentTerm": req.body.currentTerm}}, (err, user) => {
				if (err) return res.status(500).json(err);
				return res.status(200).json(user);

		})
	}
};

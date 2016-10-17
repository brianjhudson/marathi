const User = require("./User");

module.exports = {

	getUser(req, res) {
		console.log(req.user);
    User.findById(req.user._id)
		.populate("lessons.lessonId")
		.populate("reviewItems")
		.populate("termsCreated")
		.populate("lessonsCreated")
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
};

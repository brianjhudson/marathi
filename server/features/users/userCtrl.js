const User = require("./User");

module.exports = {

	getUser(req, res) {
    User.findById(req.user._id)
		.populate("lessons.lessonId")
		.populate("reviewItems")
		.populate("termsCreated")
		.populate("lessonsCreated")
		.exec((err, user) => {
			if (err) return res.status(500).json(err);
			if (user.)
		})
	}

	, logoutUser(req, res) {
      req.logout();
      res.redirect('/');
  }
};

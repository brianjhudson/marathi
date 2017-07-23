const User = require("./User");
const Lesson = require("../lessons/Lesson");

module.exports = {
	createGuest(req, res) {
          const newUser = new User({
            facebook_id: Math.floor(Math.random() * 1000000)
            , name: "Guest"
          });


          Lesson.find({}, "_id", (err, lessons) => {
            for (let i = 0; i < lessons.length; i++) {
              newUser.lessons.push({lessonDetails: lessons[i]._id, completed: false, score: 0, currentTerm: 0});
            }
            newUser.selectedLesson = newUser.lessons[0]
            newUser.save((err, user) => {
              if (err) return res.status(500).json(err);
			  res.redirect("/#!/user");
            })
		  });
	}

	, getUser(req, res) {
		let property, searchTerm
		if (req.user) {
			property = "id";
			searchTerm = req.user_id;
		} else {
			property = "name";
			searchTerm = "Guest"
		}
		User.findOne({[property]: searchTerm})
		.populate({path: "lessons.lessonDetails", populate: {path: "terms"}})
		.populate({path: "selectedLesson.lessonDetails", populate: {path: "terms"}})
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
			User.findByIdAndUpdate(req.user._id, {$set: {selectedLesson: req.body}}, (err, user) => {
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

import User from "./User";

export default {
	getAuthUser(req, res) {
    res.send(req.user)
	},

	userExists(req, res, next) {
		if (!req.user) throw new Error("Unknown User");
		User.findOne({"facebook_id": req.user.facebook_id}, (err, user) => {
			if (err) return res.redirect("/#/error");
			if (user) return res.redirect("/#/user");
			next();
		});
	},

};

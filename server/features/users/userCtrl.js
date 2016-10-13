const User = require("./User");

module.exports = {

	getUser(req, res) {
    return res.json(req.user);
	}

	, logoutUser(req, res) {
      req.logout();
      res.redirect('/');
  }
};

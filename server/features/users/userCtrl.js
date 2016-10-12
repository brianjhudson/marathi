const User = require("./User");

module.exports = {
	getAuthUser(req, res) {
    res.send(req.user)
	},
};

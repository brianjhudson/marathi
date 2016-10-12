const User = require("./User");

module.exports = {
	getAuthUser(req, res) {
		console.log("Req: ", req);
    res.send(req.user)
	},
};

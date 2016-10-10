import User from "./User";

export default {
	getAuthUser(req, res) {
		Users.findOne( {}, (err, user) => {
			if (user) {
				Users.findById(user._id)
					.populate()
					.populate()
					.populate()
					.exec((error, currentUser) => {
						if (error) {
							return res.status(500).json(error);
						}
						return res.status(200).json(currentUser);
					});
			} else if (err) {
				return res.status(500).json(err);
			}
		} );
	},

	userExists(req, res, next) {
		if ( !req.user ) throw new Error('user null');
		Users.findOne( {email: req.user._json.email}, (err, user) => {
			if (err) return res.redirect('/#/error');
			if ( user ) return res.redirect('/#/user');
			next();
		} );
	},

	createUser(req, res) {
    new User({
      displayName: req.user._json.given_name,
      lastName: req.user._json.family_name,
      email: req.user._json.email,
      creationDate: new Date(),
      photo: `https://graph.facebook.com/${req.user.identities[ 0 ].user_id}/picture?width=9999`
    }).save((err, newUser) => {
      if (err) {
        return res.redirect('/#/error');
      }
      return res.redirect('/#/user');
    } );
  }
};

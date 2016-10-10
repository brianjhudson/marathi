const userCtrl = require("./userCtrl")
    , auth = require("../../middleware/auth")

module.exports = (app, passport) => {
  app.get('/profile', auth.isLoggedIn, userCtrl.getProfile);

  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
      });
  };
}

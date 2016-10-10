const userCtrl = require("./userCtrl")
    , passport = require("passport")
    , auth = require("../../middleware/auth");

module.exports = app => {
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get("/auth/facebook/callback",
    passport.authenticate("facebook", {failureRedirect: "/"}),
    userCtrl.userExists
    // , userCtrl.createUser
  );

 app.get('/user', auth.isLoggedIn, userCtrl.getAuthUser);

 app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
 });

}

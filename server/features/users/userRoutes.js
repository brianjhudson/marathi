const userCtrl = require("./userCtrl")
    , passport = require("passport")
    , auth = require("../../middleware/auth");

module.exports = app => {
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get("/auth/facebook/callback",
    passport.authenticate("facebook", {successRedirect: "http://localhost:3000/#/user", failureRedirect: "/login"})
  );

 app.get('/user', auth.isLoggedIn, userCtrl.getAuthUser);
 //
 // app.get('/logout', function(req, res) {
 //      req.logout();
 //      res.redirect('/');
 // });

}

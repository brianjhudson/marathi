const userCtrl = require("./userCtrl")
    , passport = require("passport")
    , auth = require("../../middleware/auth")
    , ensure = require("connect-ensure-login")

module.exports = app => {
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get("/auth/facebook/callback",
    passport.authenticate("facebook", {successRedirect: "http://localhost:3000/#/user", failureRedirect: "/login"})
  );

 app.get("/user", ensure.ensureLoggedIn(), (req, res) => {
    return res.json(req.user);
  });
 //
 // app.get('/logout', function(req, res) {
 //      req.logout();
 //      res.redirect('/');
 // });

}

const userCtrl = require("./userCtrl")
    , passport = require("passport")
    , ensure = require("connect-ensure-login")

module.exports = app => {
  // Passport authentication routes
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get("/auth/facebook/callback", passport.authenticate("facebook",
    {successReturnToOrRedirect: "http://localhost:3000/#/user", failureRedirect: "/"})
  );

  app.get("/user", ensure.ensureLoggedIn(), userCtrl.getUser);
  app.get('/logout', userCtrl.logoutUser);
}

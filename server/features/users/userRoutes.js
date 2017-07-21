const userCtrl = require("./userCtrl")
    , passport = require("passport")
    , ensure = require("connect-ensure-login")

module.exports = app => {
  // Passport authentication routes
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get("/auth/facebook/callback", passport.authenticate("facebook",
    {successReturnToOrRedirect: "https://bolu-app.herokuapp.com/#/user", failureRedirect: "/"})
  );

  app.get("/guest", userCtrl.createGuest);
  app.get("/user", userCtrl.getUser);
  app.get('/logout', userCtrl.logoutUser);

  app.put("/api/users/save", ensure.ensureLoggedIn(), userCtrl.saveUserLesson);
  app.put("/api/users/select", ensure.ensureLoggedIn(), userCtrl.selectUserLesson);

}

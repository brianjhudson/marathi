import userCtrl from "./userCtrl";
import passport from "passport";
import auth from "../../middleware/auth";

export default function(app) {
  app.get("/callback",
    passport.authenticate("facebook", {failureRedirect: "/"}),
    userCtrl.userExists,
    userCtrl.createUser
  );
// 
//
// }
//   app.get('/profile', auth.isLoggedIn, userCtrl.getProfile);
//
//   app.get('/logout', function(req, res) {
//       req.logout();
//       res.redirect('/');
//       });
//   };
}

const express = require("express"),
  app = express(),
  port = process.env.PORT || 8800,
  {json} = require("body-parser"),
  cors = require("cors"),
  session = require("express-session"),
  passport = require("passport"),
  {Strategy: FacebookStrategy} = require("passport-facebook"),
  config = require("./config/config.js")
  mongoose = require("mongoose"),
  mongoUri = "mongodb://localhost:27017/ecommerce",
  User = require("./features/users/User");

app.use(cors());
app.use(json());
app.use(session({secret: config.mySecrets.secret}));
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(app, passport);
app.use(express.static(`${__dirname}/public`));

passport.use(new FacebookStrategy({
    clientID: config.facebook.clientId,
    clientSecret: config.facebook.secret,
    callbackURL: config.facebook.cbUrl
  },
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      console.log(profile)
      User.findOne({ 'facebook_id': profile.id }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user); // user found, return that user
        } else {
          var newUser = new User();
            newUser.facebook_id = profile.id;
            newUser.name  = profile.displayName;
            newUser.last = profile.name.familyName;
            if (profile.email) newUser.email = profile.email[0].value;

            newUser.save(function(err) {
                if (err)
                    throw err;

                // if successful, return the new user
                return done(null, profile);

            });
        }
      });
    });

  }));

app.get("/auth/facebook", passport.authenticate("facebook"));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: "http://localhost:8800/#/cart",
    failureRedirect: 'http://localhost:8800/#/login'
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get("/user", (req, res) => {
  res.send(req.user);
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('http://localhost:8800/#/');
});

mongoose.connect(mongoUri);
mongoose.connection.once("open", () => console.log(`Connected to MongoDB at ${mongoUri}`));


require("./masterRoutes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

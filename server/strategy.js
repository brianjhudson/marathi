const {Strategy} = require("passport-facebook")
    , User = require("./features/users/User")
    , Lesson = require("./features/lessons/Lesson")
    , config = require("./config/facebookConfig.js")

module.exports = new Strategy({
    clientID: config.clientId,
    clientSecret: config.secret,
    callbackURL: config.cbURL
  },
  (token, refreshToken, profile, done) => {
    process.nextTick(function() {
      console.log(profile)
      User.findOne({ 'facebook_id': profile.id }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user); // user found, return that user
        } else {
          const newUser = new User({
            facebook_id: profile.id
            , name: profile.displayName
            , photo: "http://graph.facebook.com/" + profile.id + "/picture?width=9999"
            , email: profile.email || ""
          });


          Lesson.find({}, "_id", (err, lessons) => {
            for (let i = 0; i < lessons.length; i++) {
              newUser.lessons.push({lessonDetails: lessons[i]._id, completed: false, score: 0, currentTerm: 0});
            }
            newUser.save((err, user) => {
              if (err) throw err;
              return done(null, user);
            })
          });
        }
      });
    });

  });

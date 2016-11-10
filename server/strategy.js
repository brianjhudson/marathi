const {Strategy} = require("passport-facebook")
    , User = require("../features/users/User")
    , Lesson = require("../features/lessons/Lesson")

module.exports = new Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://bolu-app.herokuapp.com/auth/facebook/callback"
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
            //Find and sort lessons by order number

            // for (let i = 0; i < lessons.length - 1; i++) {
            //   let smallest = i
            //     , temp;
            //   for (let j = i + 1; j < lessons.length; j++) {
            //     if (parseInt(lessons[j].order) < parseInt(lessons[smallest].order)) {
            //       smallest = j;
            //     }
            //   }
            //   if (smallest !== i) {
            //     temp = lessons[j];
            //     lessons[j] = lessons[smallest]
            //   }
            //   newUser.push(lessons[i]._id);
            // }
            // newUser.push(lessons[lessons.length - 1]._id);

            // Algorithm before sorting
            for (let i = 0; i < lessons.length; i++) {
              newUser.lessons.push(lessons[i]);
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

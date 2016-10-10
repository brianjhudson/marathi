const express = require("express")
    , sessionConfig = require("./config/config")
    , app = express()
    , port = process.env.PORT || 8800;

// JSON and Session
const {json} = require("body-parser")
    , session = require("express-session");
app.use(json());
app.use(express.static(`${__dirname}/public`));
app.use(session({secret: sessionConfig.secret}));

// Passport
const passport = require("passport")
    , strategy = require("./config/strategy");
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Mongoose
const mongoose = require("mongoose")
    , dbConfig = require("./config/database.js");
mongoose.connect(dbConfig.mongoUri);
mongoose.connection.once("open", () => console.log(`Connected to MongoDB at ${dbConfig.mongoUri}`));

//Routes
require("./masterRoutes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require("express")
const app = express()
const port = process.env.PORT || 8080;

// JSON and Session
const {json} = require("body-parser")
const session = require("express-session");
app.use(json());
app.use(express.static(`${__dirname}/dist`));
app.use(session({secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true}));

// Passport
const passport = require("passport")
    , strategy = require("./server/strategy");
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


// Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURI);
mongoose.connection.once("open", () => console.log(`Connected to MongoDB`));

//Routes
require("./server/masterRoutes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

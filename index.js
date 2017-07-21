const express = require("express")
const app = express()
const port = 8000;

// JSON and Session
const bodyParser = require("body-parser")
const session = require("express-session");
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static(`${__dirname}/dist`));
const sessionConfig = require("./server/config/config")
app.use(session(sessionConfig));
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
const mongoUri = require("./server/config/database").mongoUri;
mongoose.connect(mongoUri, {useMongoClient: true});

mongoose.connection.once("open", () => console.log(`Connected to MongoDB`));

//Routes
require("./server/masterRoutes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

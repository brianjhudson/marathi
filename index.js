import express from "express";
import config from "./config/config";
const app = express()
    , port = process.env.PORT || 8800;

// JSON and Session
import {json} from "body-parser";
import session from "express-session";
app.use(json());
app.use(express.static(`${__dirname}/public`));
app.use(session({secret: config.mySecrets.secret}));

// Passport
import passport from "passport";
import strategy from "./config/strategy";
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Mongoose
import mongoose from "mongoose";
import databaseConfig from "./config/database.js";
mongoose.connect(databaseConfig.mongoUri);
mongoose.connection.once("open", () => console.log(`Connected to MongoDB at ${databaseConfig.mongoUri}`));

//Routes
import masterRoutes from "./masterRoutes";
masterRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

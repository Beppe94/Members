import "dotenv/config";
import express from "express";
import path from "path";
import passport from "passport";
import session from "express-session";
import route from "../routes/router";

const app = express();
const ENV = process.env;

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join("public")));
app.use(passport.initialize());
app.use(session({secret: ENV.SESSION_SECRET!, resave: false, saveUninitialized: false, cookie: { secure: false}}));
app.use(passport.session());

app.use("/", route);

app.listen(ENV.PORT, () => {
    return console.log(`App listening on port: ${ENV.PORT}`);
})
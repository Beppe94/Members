import { RequestHandler } from "express";
import passport from "passport";


export const getHomepage: RequestHandler = (req, res) => {
    res.render("home");
}


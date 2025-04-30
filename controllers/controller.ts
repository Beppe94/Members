import { RequestHandler } from "express";
import passport from "passport";
import bcrypt from "bcryptjs";
import { sendMail } from "./emailer";

export const getHomepage: RequestHandler = (req, res) => {
    
    res.render("home");
}

export const signUp: RequestHandler = async (req, res) => {
    const {firstName, lastName, email, password, confirmPw} = await req.body;

    try{
        await sendMail(email);
    } catch (e) {
        console.log(e);
    }

    res.redirect("/")
}
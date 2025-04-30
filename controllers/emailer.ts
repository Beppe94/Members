import nodemailer from "nodemailer";
import "dotenv/config";

const ENV = process.env;

const transporter = nodemailer.createTransport({
    host: String(ENV.EMAILERHOST),
    port: Number(ENV.EMAILERPORT),
    secure: Boolean(false),
    auth: {
        user: String(ENV.EMAILERUSER),
        pass: String(ENV.EMAILERPASSWORD),
    }
})

export async function sendMail(email: string) {
    const info = await transporter.sendMail({
        from: 'Game Member',
        to: email,
        subject: "Welcome",
        text: ""
    })

    console.log("email sent", info.messageId);
}
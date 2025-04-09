import pkg from "pg";
import "dotenv/config";

const {Pool} = pkg;
const ENV = process.env;

export const pool = new Pool({
    user: ENV.USER,
    password: ENV.DBPASSWORD,
    host: ENV.HOST,
    port: Number(ENV.DBPORT),
    database: ENV.DATABASE
})
import { Router } from "express";
import { getHomepage, signUp } from "../controllers/controller";

const route = Router();

route.get("/", getHomepage);
route.post("/signup", signUp);

export default route;
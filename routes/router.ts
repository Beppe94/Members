import { Router } from "express";
import { getHomepage } from "../controllers/controller";

const route = Router();

route.get("/", getHomepage);

export default route;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const ENV = process.env;
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join("public")));
let broken = "hello";
let person = { name: "retard", age: "idk" };
app.get("/", (req, res) => {
    res.send(person.age, broken);
});
app.listen(ENV.PORT, () => {
    return console.log(`App listening on port: ${ENV.PORT}`);
});
//# sourceMappingURL=index.js.map
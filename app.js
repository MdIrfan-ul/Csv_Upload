import "./env.js"
import express from "express";
import EjsLayouts from "express-ejs-layouts";
import path from "path";
import { connectToDB } from "./config/db.config.js";
import CsvController from "./src/controllers/Csv.controller.js";
import { uploadFile } from "./src/middlewares/file-upload.middleware.js";

connectToDB();
const server = express();
server.use(express.static("public"));
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(),"src","views"));

server.use(EjsLayouts);
server.use(express.urlencoded({extended:true}));

const csvController = new CsvController();
// server.use("/")
server.get("/",csvController.home);
server.post("/",uploadFile.single('csvFile'),csvController.uploadDisplay);
server.get("/details/:id",csvController.getDetails)


server.use(express.static("src/views"));


export {server};
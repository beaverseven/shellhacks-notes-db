import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
// import Notes from "./config.js";

const app = express(); //app as express server
const corsObject = { origin: "*" };
//app can be accessed by everyone bc origin: *

app.use(cors(corsObject));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const MB = 1048576;
// app.use(
//   fileUpload({
//     limits: {
//       fileSize: 10 * MB
//     },
//     abortOnLimit: true
//   })
// );
const cpUpload = upload.fields([{ name: "pdf", maxCount: 1 }]);

const port = 3001;

app.listen(port, startMsg);

function startMsg() {
  console.log(`Test apis with http://localhost:${port}`);
}

routes(app, cpUpload);

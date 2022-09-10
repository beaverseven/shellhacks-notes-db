import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes.js";
// import Notes from "./config.js";

const app = express(); //app as express server
const corsObject = { origin: "*" };
//app can be accessed by everyone bc origin: *

app.use(cors(corsObject));
app.use(bodyParser.json());

const port = 3001;

app.listen(port, startMsg);

function startMsg() {
  console.log(`Test apis with http://localhost:${port}`);
}

routes(app);

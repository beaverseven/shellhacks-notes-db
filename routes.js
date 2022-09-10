import { handleGet } from "./services.js";

/*
TODO:
get all with query
create from body (taking a json request and post to db)


*/

export default async function routes(app) {
  app.get("/get", handleGet);
  app.post("/create", (req, res) => {});
}

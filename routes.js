import { addNotes, getNotes } from "./services.js";

export default async function routes(app) {
  app.get("/get", getNotes);
  app.post("/create", addNotes);
}

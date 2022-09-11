import { addNotes, getNotes } from "./services.js";
import { uploadFile } from "./googleCloudStorage.js";

export default async function routes(app, cpUpload) {
  app.get("/get", getNotes);
  app.post("/create", cpUpload, addNotes);
  // app.post("/t", cpUpload, async (req, res) => {
  //   const pdf = req.files.pdf[0];
  //   console.log(pdf);

  //   await uploadFile(pdf, 45335);

  //   await res.status(200);
  //   res.json({ ok: "ok" });
  // });
}

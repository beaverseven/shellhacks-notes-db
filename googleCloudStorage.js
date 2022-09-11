import { Storage } from "@google-cloud/storage";
import path from "path";

const files = [];
const gc = new Storage({
  keyFilename: "./google-creds.json",
  projectId: "hidden-sunlight-360500",
});

gc.getBuckets().then((x) => {
  // console.log(x);
});

const pdfBucket = gc.bucket("katsudon-assets/");
// console.log(pdfBucket);

export async function uploadFile(file, id) {
  console.log(file);
  if (!file) return;
  const destination = `katsudon-notes/${id}.pdf`;
  await gc
    .bucket("katsudon-assets/")
    .file(destination)
    .save(file.data)
    .then(() => console.log(`File uploaded successfully to ${destination}`));
}

export default gc;

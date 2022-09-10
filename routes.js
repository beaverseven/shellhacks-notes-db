import Notes from "./config.js";
import { onSnapshot, query, where } from "firebase/firestore";

async function handleGet(req, res) {
  const field = "school";
  const comparator = "==";
  const target = "CUNY Hunter College";

  const matchQuery = query(Notes, where(field, comparator, target));

  //const q = query(Notes); <-- select all

  //fetch from database using query
  onSnapshot(matchQuery, (snapshot) => {
    const matchedResult = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    res.status(200);
    res.json({ rows: matchedResult });
  });
}

export default async function routes(app) {
  app.get("/get", handleGet);
}

import _ from "lodash";
import { onSnapshot, query, where, addDoc } from "firebase/firestore";
import Notes from "./config.js";
import { textContains } from "./utils.js";

export async function getNotes(req, res) {
  const queryParams = req.query; //the user queries

  function translateQuery(value, key) {
    return where(key, "==", value);
  }

  const whereQueries = _.map(_.omit(queryParams, "notes"), translateQuery);
  const matchQuery = query(Notes, ...whereQueries);

  //fetch from database using query
  onSnapshot(matchQuery, (snapshot) => {
    let matchedResult = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    //filter by notes
    if (queryParams["notes"] != null) {
      matchedResult = _.filter(matchedResult, (document) => {
        return textContains(document.notes, queryParams.notes);
      });
    }

    res.status(200);
    res.json({
      count: matchedResult.length,
      rows: matchedResult,
    });
  });
}

//todo
async function addPDFToGoogleCloud(documentId) {}

export async function addNotes(req, res) {
  const notesData = req.body;

  const updatedDoc = {
    ...notesData,
    _id: Math.floor(Math.random() * 1e16),
    created_at: new Date(),
    likes: 0,
    dislikes: 0,
  }; //Updates Document into a new object

  await addDoc(Notes, updatedDoc)
    .then(async (document) => {
      console.log(`added ${updatedDoc._id}`);
      await addPDFToGoogleCloud(pdf, document._id).catch((e) => {
        console.log("cant add file");
      });
    })
    .catch((e) => {
      console.log("could not add notes");
    });

  res.status(200);
  res.json(notesData);
}

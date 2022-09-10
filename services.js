import _ from "lodash";
import {
  onSnapshot,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import Notes from "./config.js";
import { textContains } from "./utils.js";

//implement query match
export async function handleGet(req, res) {
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

//implement post to db

export async function AddReq(req, res) {
  const notesData = req.body;
  const updatedDoc = {
    ...notesData,
    created_at: new Date(),
    likes: 0,
    dislikes: 0,
  }; //Updates Document into a new object
  addDoc(Notes, updatedDoc);

  res.status(200);
  res.json(updatedDoc);
}

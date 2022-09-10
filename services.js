import Notes from "./config.js";
import { onSnapshot, query, where, addDoc, collection } from "firebase/firestore";

//implement query match
export async function handleGet(req, res) {
  const queryParams = req.query; //the user queries
  console.log(queryParams);

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
    //notes contain this and that
    //notes can be array of strings

    res.status(200);
    res.json({ rows: matchedResult });
  });
}

//implement post to db

export async function AddReq(req, res) {


  const notesData = req.body;
  const updatedDoc = { ...notesData, created_at: new Date(), likes: 0, dislikes: 0 } //Updates Document into a new object
  addDoc(Notes,updatedDoc)
  res.status(200);
  res.json(updatedDoc);









}



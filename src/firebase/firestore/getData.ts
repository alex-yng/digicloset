import firebase_app from "@/firebase/config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function getDocument(collection: string, id: string) {
  let docRef = doc(db, collection, id);
  let docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(docSnap.data);
  } else {
    console.log("error; no data found");
  }
}

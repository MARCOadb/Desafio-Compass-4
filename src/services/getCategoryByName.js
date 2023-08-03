import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

const getCategoryByName = async (name) => {
  const categoriesRef = collection(db, "categories");
  const q = query(categoriesRef, where("name", "==", name));
  const querySnapshot = await getDocs(q);
  return {
    id: querySnapshot.docs[0].data().id,
  };
};
export default getCategoryByName;

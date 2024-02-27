import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { createContext, useContext } from "react";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { actionType } from "../redux/actionType";

const questionContext = createContext();
export const useQuestion = () => useContext(questionContext);

const QuestionContext = ({ children }) => {
  const questionCollectionRef = collection(db, "love");
  const dispacth = useDispatch();



  async function getQuestionCollection() {
    let data = await getDocs(questionCollectionRef);
    data = data.docs.map((el) => ({ ...el.data(), id: el.id }));
    dispacth({
      type: actionType.GET_QUESTIONS,
      payload: data,
    });
  }

  async function addQuestion(question) {
    await addDoc(questionCollectionRef, question);
  }

  async function deleteQuestion(id) {
    const questionId = doc(db, "love", id);
    await deleteDoc(questionId);
  }

  async function editQuestionLike(id, userEmail) {
    const userRef = doc(db, "love", id);
    const oneQues = await getDoc(userRef);
    let addLike = oneQues.data();
    addLike.like.push(userEmail);
    await updateDoc(userRef, addLike);
  }

  const values = {
    addQuestion,
    getQuestionCollection,
    deleteQuestion,
    editQuestionLike,
  };
  return (
    <questionContext.Provider value={values}>
      {children}
    </questionContext.Provider>
  );
};

export default QuestionContext;

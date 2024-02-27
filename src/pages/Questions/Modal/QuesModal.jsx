import React, { useState } from "react";
import { useQuestion } from "../../../context/QuestionContext";
import { useSelector } from "react-redux";

const QuesModal = ({ setModal }) => {
  const [value, setValue] = useState("");

  const { addQuestion } = useQuestion();

  const { user } = useSelector((s) => s);

  function handleAddQuestion() {
    let obj = {
      user: {
        name: user.displayName,
        photo: user.photoURL,
      },
      value,
      answer: [],
      comment: [],
      like: [],
    };
    addQuestion(obj);
    setValue("");
    setModal(false);
  }

  return (
    <section id="ques-modal">
      <h1>Мой вопрос</h1>
      <textarea
        onChange={(e) => setValue(e.target.value)}
        value={value}
        cols="30"
        rows="10"
      ></textarea>
      <div className="ques_btns">
        <button onClick={() => setModal(false)}>Отменить</button>
        <button onClick={handleAddQuestion}>Отправить</button>
      </div>
    </section>
  );
};

export default QuesModal;

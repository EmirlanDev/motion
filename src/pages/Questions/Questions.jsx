import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import QuesModal from "./Modal/QuesModal";
import QuesCart from "./QuesCart/QuesCart";
import { useSelector } from "react-redux";
import { useQuestion } from "../../context/QuestionContext";
import Loader from "../../components/Loader/Loader";

const Questions = () => {
  const [modal, setModal] = useState(false);
  const { questions } = useSelector((s) => s);
  const { getQuestionCollection } = useQuestion();
  const [slice, setSlice] = useState(true);

  useEffect(() => {
    getQuestionCollection();
  }, [questions]);

  return (
    <section id="question">
      <div className="container">
        <div className="question">
          <div className="question__head">
            <button onClick={() => setModal(true)}>Оставить вопрос</button>
            <input type="search" />
            <button>
              <IoIosSearch />
            </button>
          </div>
          {modal ? <QuesModal setModal={setModal} /> : null}
          {questions.length > 0 ? (
            slice ? (
              <>
                {questions.slice(0, 5).map((el, idx) => (
                  <QuesCart el={el} idx={idx} />
                ))}
                <button
                  style={{ display: questions.length < 5 ? "none" : "" }}
                  className="slice"
                  onClick={() => setSlice(false)}
                >
                  ещё
                </button>
              </>
            ) : (
              <>
                {questions.slice(0).map((el, idx) => (
                  <QuesCart el={el} idx={idx} />
                ))}
                <button
                  style={{ display: questions.length < 5 ? "none" : "" }}
                  className="slice"
                  onClick={() => setSlice(true)}
                >
                  скрыть
                </button>
              </>
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Questions;

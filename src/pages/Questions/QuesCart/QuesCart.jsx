import React, { useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useQuestion } from "../../../context/QuestionContext";
import Responses from "./Responses/Responses";
import Answer from "./Answer/Answer";

const QuesCart = ({ el, idx }) => {
  const { user, questions } = useSelector((s) => s);

  const { deleteQuestion, addQuestionLike, deleteQuestionLike } = useQuestion();

  const [response, setResponse] = useState(false);

  function checkLike(el) {
    if (IF()) {
      deleteQuestionLike(el.id);
      return;
    }
    addQuestionLike(el.id, user.email);
  }
  function IF() {
    return el.like.some((email) => email === user.email);
  }

  return (
    <section key={idx} id="ques-cart">
      <div className="ques-cart">
        <div className="ques-cart__head">
          <div className="ques-cart__head__user">
            {el.user && el.user.photo ? (
              <img src={el.user.photo} alt="userPhoto" />
            ) : (
              <h3>{el.user.name ? el.user.name.slice(0, 1) : ""}</h3>
            )}
            <h2>{el.user.name}</h2>
          </div>
          {user.displayName === el.user.name ? (
            <button onClick={() => deleteQuestion(el.id)}>
              <CgClose />
            </button>
          ) : null}
        </div>
        <div className="ques-cart__body">
          <h3>{el.value}</h3>
          <div className="ques-cart__body__btns">
            <button
              style={{
                color: IF() ? "aqua" : "",
              }}
              onClick={() => checkLike(el)}
            >
              <BiSolidLike />
              {el.like.length}
            </button>
            <button>
              <FaCommentDots />
              {el.comment.length}
            </button>
            <button
              onClick={() => {
                setResponse(true);
              }}
            >
              Ответы {el.answer.length}
            </button>
            <button
              style={{
                marginLeft: "55%",
                display: response ? "" : "none",
              }}
              onClick={() => setResponse(false)}
            >
              ^
            </button>
          </div>
          <div
            style={{ display: response ? "" : "none" }}
            className="ques-cart__body__response"
          >
            <div className="ques-cart__body__response__scroll">
              <Responses />
            </div>
            <Answer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuesCart;

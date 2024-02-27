import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useQuestion } from "../../../context/QuestionContext";

const QuesCart = ({ el, idx }) => {
  const { user } = useSelector((s) => s);

  const { deleteQuestion, editQuestionLike } = useQuestion();

  const likeObj = {
    email: user.email,
  };

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
            <button onClick={() => editQuestionLike(el.id, likeObj)}>
              <BiSolidLike />
              {el.like.length}
            </button>
            <button>
              <FaCommentDots />
              {el.comment.length}
            </button>
            <button>Ответы {el.answer.length}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuesCart;

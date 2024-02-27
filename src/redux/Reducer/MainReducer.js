import { actionType } from "../actionType";

const INIT_STATE = {
  user: null,
  questions: [],
  oneQuestion: null,
};

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.CHECK_USER:
      return { ...state, user: action.payload };
    case actionType.GET_QUESTIONS:
      return { ...state, questions: action.payload };
    case actionType.ONE_QUESTION:
      return { ...state, oneQuestion: action.payload };
    default:
      return state;
  }
};

import { actionType } from "../actionType";

const INIT_STATE = {
  user: null,
};

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.CHECK_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

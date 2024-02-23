import { createStore } from "redux";
import { reducer } from "./Reducer/MainReducer";

export const store = createStore(reducer);

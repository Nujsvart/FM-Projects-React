import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";
import themeReducer from "./themeReducer";

const reducers = combineReducers({
  todos: todoReducer,
  filtered: filterReducer,
  theme: themeReducer,
});

export default reducers;

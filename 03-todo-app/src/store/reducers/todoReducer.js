import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

const nextId = todos => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        { id: nextId(state), text: action.payload, completed: false },
      ];
    default:
      return state;
  }
};

export default todoReducer;

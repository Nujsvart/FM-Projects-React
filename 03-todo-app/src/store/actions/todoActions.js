import * as actionTypes from "./actionTypes";

export const addTodo = text => {
  return {
    type: actionTypes.ADD_TODO,
    payload: text,
  };
};

export const removeTodo = id => {
  return {
    type: actionTypes.REMOVE_TODO,
    payload: id,
  };
};

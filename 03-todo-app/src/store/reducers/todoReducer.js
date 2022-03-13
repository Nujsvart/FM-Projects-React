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

    case actionTypes.REMOVE_TODO:
      return state.filter(item => item.id !== action.payload);

    case actionTypes.COMPLETE_TODO:
      return state.map(item => {
        if (item.id !== action.payload) return item;
        return { ...item, completed: !item.completed };
      });

    case actionTypes.CLEAR_COMPLETED_TODOS:
      return state.filter(item => !item.completed);

    default:
      return state;
  }
};

export default todoReducer;

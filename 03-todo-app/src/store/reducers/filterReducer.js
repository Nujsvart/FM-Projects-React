import { SET_FILTER } from "../actions/actionTypes";

const filterReducer = (state = "ALL", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export const showFilteredTodos = (todos, filter) => {
  switch (filter) {
    case "ALL":
      return todos;
    case "ACTIVE":
      return todos.filter(todo => !todo.completed);
    case "COMPLETED":
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export default filterReducer;

import { SET_FILTER } from "../actions/actionTypes";

const filterReducer = (state = "All", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export const showFilteredTodos = (todos, filter) => {
  switch (filter) {
    case "All":
      return todos;
    case "Active":
      return todos.filter(todo => !todo.completed);
    case "Completed":
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export default filterReducer;

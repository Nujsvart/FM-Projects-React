import { SET_FILTER } from "../actions/actionTypes";

export const initialState = {
  All: "All",
  Active: "Active",
  Completed: "Completed",
};

const filterReducer = (state = initialState.All, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export const showFilteredTodos = (todos, filter) => {
  switch (filter) {
    case initialState.All:
      return todos;
    case initialState.Active:
      return todos.filter(todo => !todo.completed);
    case initialState.Completed:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export default filterReducer;

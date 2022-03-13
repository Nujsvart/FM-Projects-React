import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../store/actions/todoActions";
import { showFilteredTodos } from "../store/reducers/filterReducer";

const Todo = () => {
  const todos = useSelector(state => state.todos);
  const activeFilter = useSelector(state => state.filtered);
  const dispatch = useDispatch();

  const filteredTodos = showFilteredTodos(todos, activeFilter);

  return (
    <ul>
      {filteredTodos.map(item => {
        return (
          <li
            className={`todo ${item.completed && "completedTodo"}`}
            key={item.id}
          >
            <button
              onClick={() => dispatch(removeTodo(item.id))}
              className="checkIcon"
            >
              icon
            </button>
            <p onClick={() => dispatch(completeTodo(item.id))}>{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;

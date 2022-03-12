import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../store/actions/todoActions";

const Todo = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  return (
    <ul>
      {todos.map(item => {
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

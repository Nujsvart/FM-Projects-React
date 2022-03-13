import React from "react";
import CheckButton from "./CheckButton";

import { useSelector } from "react-redux";
import { showFilteredTodos } from "../store/reducers/filterReducer";

const Todo = () => {
  const todos = useSelector(state => state.todos);
  const activeFilter = useSelector(state => state.filtered);

  const filteredTodos = showFilteredTodos(todos, activeFilter);

  return (
    <ul>
      {filteredTodos.map(item => {
        return (
          <li className="todo" key={item.id}>
            <CheckButton todo={item} />
            <p className={`${item.completed && "completedTodo"}`}>
              {item.text}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;

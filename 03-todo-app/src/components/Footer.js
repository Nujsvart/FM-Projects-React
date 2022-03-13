import React from "react";
import { clearCompletedTodos } from "../store/actions/todoActions";
import { setFilter } from "../store/actions/filterActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Footer = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const unCompletedTodos = tasks => {
    return tasks.filter(task => !task.completed);
  };

  const item = unCompletedTodos(todos).length > 1 ? "items" : "item";

  return (
    <div className="todoFooter">
      <div className="itemsLeft">
        <p>
          {unCompletedTodos(todos).length} {item} left
        </p>
      </div>
      <div className="buttons">
        <button onClick={() => dispatch(setFilter("ALL"))}>All</button>
        <button onClick={() => dispatch(setFilter("ACTIVE"))}>Active</button>
        <button onClick={() => dispatch(setFilter("COMPLETED"))}>
          Completed
        </button>
      </div>
      <div className="clearButton">
        <button onClick={() => dispatch(clearCompletedTodos())}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Footer;

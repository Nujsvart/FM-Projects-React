import React from "react";

import { useSelector } from "react-redux";

const Todo = () => {
  const todos = useSelector(state => state.todos);
  console.log(todos);
  return (
    <>
      {todos.map(item => {
        return (
          <div className="todo" key={item.id}>
            <div className="checkIcon">icon</div>
            <p>{item.text}</p>
          </div>
        );
      })}
    </>
  );
};

export default Todo;

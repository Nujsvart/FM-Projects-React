import React, { useState } from "react";
import Button from "./Button";

import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoActions";

const TodoInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const textTrim = text.trim();
    textTrim && dispatch(addTodo(textTrim));
    setText("");
  };

  return (
    <div className="todoInput">
      <Button className="checkBtn" />
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export default TodoInput;

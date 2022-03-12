import React, { useState } from "react";
import * as actionTypes from "../store/actions/actionTypes";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const textTrim = text.trim();

    textTrim && dispatch({ type: actionTypes.ADD_TODO, payload: textTrim });

    setText("");
  };

  return (
    <div className="todoInput">
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

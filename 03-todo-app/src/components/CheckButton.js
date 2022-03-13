import React from "react";
import Button from "./Button";
import iconCheck from "../assets/icon-check.svg";

import { completeTodo } from "../store/actions/todoActions";
import { useDispatch } from "react-redux";

const CheckButton = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(completeTodo(todo.id))}
      className={`checkBtn ${todo.completed && "completedIcon"}`}
    >
      {todo.completed && <img src={iconCheck} alt="checkicon" />}
    </Button>
  );
};

export default CheckButton;

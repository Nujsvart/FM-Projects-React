import React from "react";
import Button from "./Button";
import deleteIcon from "../assets/icon-cross.svg";

import { removeTodo } from "../store/actions/todoActions";
import { useDispatch } from "react-redux";

const DeleteButton = ({ todoId }) => {
  const dispatch = useDispatch();
  return (
    <Button className="deleteBtn" onClick={() => dispatch(removeTodo(todoId))}>
      <img src={deleteIcon} alt="deleteicon" />
    </Button>
  );
};

export default DeleteButton;

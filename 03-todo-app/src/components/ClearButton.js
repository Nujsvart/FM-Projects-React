import React from "react";
import Button from "./Button";

import { clearCompletedTodos } from "../store/actions/todoActions";
import { useDispatch } from "react-redux";

const ClearButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="clearButton">
      <Button onClick={() => dispatch(clearCompletedTodos())}>
        Clear Completed
      </Button>
    </div>
  );
};

export default ClearButton;

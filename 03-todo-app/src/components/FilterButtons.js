import React from "react";
import Button from "./Button";

import { setFilter } from "../store/actions/filterActions";
import { useDispatch } from "react-redux";

const FilterButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="buttons">
      {["All", "Active", "Completed"].map(item => (
        <Button key={item} onClick={() => dispatch(setFilter(item))}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;

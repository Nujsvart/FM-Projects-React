import React, { useState } from "react";
import Button from "./Button";

import { initialState } from "../store/reducers/filterReducer";
import { setFilter } from "../store/actions/filterActions";
import { useDispatch } from "react-redux";

const FilterButtons = () => {
  const [activeBtn, setActiveBtn] = useState("All");

  const dispatch = useDispatch();

  const onClickHandler = item => {
    dispatch(setFilter(item));
    setActiveBtn(item);
  };

  return (
    <div className="buttons">
      {Object.keys(initialState).map(item => (
        <Button
          className={item === activeBtn ? "activeFilter" : ""}
          key={item}
          onClick={() => onClickHandler(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;

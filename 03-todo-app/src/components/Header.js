import React from "react";
import Button from "./Button";
import SunIcon from "../assets/icon-sun.svg";
import MoonIcon from "../assets/icon-moon.svg";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeTheme } from "../store/actions/themeActions";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  return (
    <div className="header">
      <div className="titleContainer">
        <h1>TODO</h1>
        <div className="themeIcon">
          <Button className="themeBtn" onClick={() => dispatch(changeTheme())}>
            <img src={theme === "dark" ? SunIcon : MoonIcon} alt="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

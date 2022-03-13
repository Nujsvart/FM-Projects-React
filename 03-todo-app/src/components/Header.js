import React from "react";
import Button from "./Button";
import SunIcon from "../assets/icon-sun.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="titleContainer">
        <h1>TODO</h1>
        <div className="themeIcon">
          <Button className="themeBtn">
            <img src={SunIcon} alt="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

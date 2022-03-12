import React from "react";
import SunIcon from "../assets/icon-sun.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="titleContainer">
        <h1>TODO</h1>
        <div className="themeIcon">
          <button className="themeBtn">
            <img src={SunIcon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

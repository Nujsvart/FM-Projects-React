import React from "react";
import ProfilePic from "../assets/image-jeremy.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar_profile">
        <div className="profilePic">
          <img src={ProfilePic} alt="Jeremy" />
        </div>
        <div>
          <span className="subtitle">Report for</span>
          <p className="userName">Jeremy Robson</p>
        </div>
      </div>
      <div className="navBar_links">
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

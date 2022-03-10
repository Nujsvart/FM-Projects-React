import React from "react";
import ProfilePic from "../assets/image-jeremy.png";

const NavProfile = () => {
  return (
    <div className="navBar_profile">
      <div className="profilePic">
        <img src={ProfilePic} alt="Jeremy" />
      </div>
      <div>
        <span className="subtitle">Report for</span>
        <p className="userName">Jeremy Robson</p>
      </div>
    </div>
  );
};

export default NavProfile;

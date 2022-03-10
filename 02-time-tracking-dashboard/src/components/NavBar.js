import React from "react";
import NavProfile from "./NavProfile";
import NavLinks from "./NavLinks";

const NavBar = ({ setShowPage }) => {
  return (
    <div className="navBar">
      <NavProfile />
      <NavLinks setShowPage={setShowPage} />
    </div>
  );
};

export default NavBar;

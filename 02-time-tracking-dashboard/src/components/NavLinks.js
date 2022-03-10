import React from "react";

const NavLinks = ({ setShowPage }) => {
  return (
    <div className="navBar_links">
      <ul>
        <li>
          <button onClick={() => setShowPage("daily")}>Daily</button>
        </li>
        <li>
          <button onClick={() => setShowPage("weekly")}>Weekly</button>
        </li>
        <li>
          <button onClick={() => setShowPage("monthly")}>Monthly</button>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;

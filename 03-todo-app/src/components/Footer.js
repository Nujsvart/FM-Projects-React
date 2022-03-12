import React from "react";

const Footer = () => {
  return (
    <div className="todoFooter">
      <div className="itemsLeft">
        <p>5 items left</p>
      </div>
      <div className="buttons">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className="clearButton">
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default Footer;

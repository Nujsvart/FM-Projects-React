import React from "react";

const CardInfoTotal = ({ times, lastTime }) => {
  return (
    <>
      <p className="current">{times.current}hrs</p>
      <p className="previous">
        {`Last ${lastTime}`} - {times.previous}hrs
      </p>
    </>
  );
};

export default CardInfoTotal;
